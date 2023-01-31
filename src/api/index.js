import Global from '../global/index'
import { showMessage } from 'react-native-flash-message';
const { BASE_URL, PAS_KEY } = Global;
let domainUrl = BASE_URL.DEV;
// let domainUrl = BASE_URL.PROD;
import _ from 'lodash';
import SharedManager from '../components/sharedmanager/SharedManager';

const BODY = (header, data, error) => ({
    PWSESSIONRS: {
        PWPROCESSRS: {
            PWDATA: data,
            PWERROR: {},
            PWHEADER: {
                IN_PROCESS_ID: header.IN_PROCESS_ID,
                APP_ID: 'HMC',
                ORG_ID: 'HMC',
                OUT_PROCESS_ID: header.OUT_PROCESS_ID,
                LOGIN_ID: header.LOGIN_ID,
            },
        },
    },
});


//===================Response blob ===============================//
const responseBlob = (
    res,
    link,
    resolve,
    reject,
    isMultiple,
) => {

    const session = res.PWSESSIONRS[0];
    const response = session.PWPROCESSRS;
    const dataBlob = response.PWDATA;
    const error = response.PWERROR;
    const MBResponse = dataBlob[link];
    if (!_.isEmpty(error)) {
        showMessage({ message: error[`${link}`]?.Row?.Message ?? 'Something went wrong.', type: 'danger', position: "bottom" });
        reject(error);
        return;
    }
    const dataRow = isMultiple ? MBResponse.Row : MBResponse.Row[0];
    if (dataRow?.response != undefined) {
        resolve(dataRow.response);
    }

    else if (MBResponse.Row.length > 0) {
        const data = isMultiple ? dataRow[0] : dataRow;
        if (data.success === '0') {
            reject({ ...data, error });
            return;
        }
        resolve(dataRow);
    }
    else {
        resolve(dataRow);
        // reject({ ...dataRow, error });
    }
};

const responseBlob1 = (
    res,
    link,
    isMultiple,
) => {
    const session = res.PWSESSIONRS[0];
    const response = session.PWPROCESSRS;
    const dataBlob = response.PWDATA;
    const error = response.PWERROR;
    const MBResponse = dataBlob[link];
    if (!_.isEmpty(error)) {


        return { success: '0', error };
    }
    const dataRow = isMultiple ? MBResponse.Row : MBResponse.Row[0];
    if (MBResponse.Row.length > 0) {
        const data = isMultiple ? dataRow[0] : dataRow;
        if (data.success === '0') {
            // showMessage({message: data.message, type: 'danger'});

            return { success: '0', error };
        }
        return dataRow;
    } else {
        return { success: '0', error };;
    }
};



export const POST = (link, data, navigation, text) =>
    
    new Promise(async (resolve, reject) => {
        const url = domainUrl;
        if (__DEV__) {
            console.log('domain url', url);
           var token= SharedManager.getInstance().getToken();
           console.log('domain token', token);
        }
        let headers = {
            //@ts-ignore
            Authorization: `${SharedManager.getInstance().getToken()}`,
            // Authorization: ``,
            'Content-type': 'application/json',
        };
        const res = BODY(data.header, data.data, {});

        await fetch(url, {
            body: JSON.stringify(res),
            method: 'POST',
            headers: headers,
        })
            .then(async (response) => {
                if (__DEV__) {
                    console.log('Request', JSON.stringify(res));
                    console.log('Response', JSON.stringify(response));
                }
                if (response.status === 200) {
                    return response.json();
                }else if (response.status === 204, 201,205) {
                    reject("Internal server error");
                }  else if (response.status === 401) {
                    reject("Some error occurred");
                }
                else if (response.status === 400,404,408,409) {
                    reject("Some error occurred");
                } else if (response.status === 500) {
                    reject("Internal server error");
                }
                
                // if (response.status === 401) {
                //     // await AsyncStorage.clear();
                //     // navigation.reset({
                //     //     index: 0,
                //     //     routes: [
                //     //         { name: 'Login' },
                //     //     ],
                //     // })
                // }
                // else {
                //     return response.json();
                // }
            })
            .then(responseText => {
                if (__DEV__) {
                    console.log(`Response Data ${link}`, JSON.stringify(responseText));
                }
                if (!responseText) {
                    return
                }

                responseBlob(responseText, link, resolve, reject, data.isMultiple);
                resolve(responseText);
            })
            .catch(error => {
                if (__DEV__) {
                    console.log('ErrorAuth', error);
                }
                reject(error);
            });
    });













const refreshToken = async (link, data, access_token, navigation) =>
    new Promise(async (resolve, reject) => {
        const url = domainUrl;
        let headers = {
            Authorization: `Bearer ${access_token}`,
            'Content-type': 'application/json',
        };

        // console.log("dataRequest",data)
        const res = BODY(data.header, data.data, {});
        if (__DEV__) {
            console.log('RequestData', JSON.stringify(res));
        }
        await fetch(url, {
            body: JSON.stringify(res),
            method: 'POST',
            headers: headers,
        })
            .then(response => {
                return response.json();
            })
            .then((responseText) => {
                if (__DEV__) {
                    console.log('new token', responseText);
                }
                const resData = responseBlob1(responseText, link, false);
                if (resData.success === '1') {
                    if (__DEV__) {
                        console.log('new token', resData.token.token);
                    }
                    // var res = resData
                    // if (res.type === 'dealer') {
                    //   res.emp_email_id = res.login_id
                    //   res.emp_name = res.dealer_name
                    //   res.emp_designation_type = res.type
                    // }
                    var res = SharedManager.getInstance().getUser()
                    res.token = resData.token
                    let encData = crypto.AES.encrypt(JSON.stringify({ res }), PAS_KEY).toString();
                    AsyncStorage.setItem('user', JSON.stringify({ res }));
                }
                const tempObject = { status: resData.success !== '0', data: res }

                resolve(tempObject)
            })
            .catch(error => {
                if (__DEV__) {
                    console.log('ErrorAuth', error);
                }

                const errorObject = { status: false, data: error }
                reject(errorObject)
            });


    })
