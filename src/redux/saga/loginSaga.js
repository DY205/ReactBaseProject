import { takeEvery, put, takeLatest } from "redux-saga/effects";
import { USER_DATA, VERIFY_OTP,LOGIN,FOR_LOADER} from '../constants';
import * as API from "../../api/index";
import { showMessage } from 'react-native-flash-message';
import { setLoader } from '../actions/loginActions';
import { useDispatch, useSelector } from "react-redux";

function* loginSagaFunction(_data) {
    try {
        const realData = _data.payload;
        const dispatch = realData.dispatch;
        // dispatch(setLoader({ loader: true }))
        if (__DEV__) {
            console.log("Payload Data ===>", realData)
        }
        let res = {}

        res = yield API.POST('MB_Authentication', realData.request, _data.payload.navigation)


        if (__DEV__) {
            console.log('response in saga ===> ', res)
        }
        if(res=='Error'){
            console.log('response in sagaaa ===> ', res)
            // showMessage({ message: "Error", type: 'danger', position: "bottom" });
        }
        if (res.status == "1") {
            showMessage({ message: res.message, type: 'success', position: "bottom" });
            yield put({ type: USER_DATA, data: res })
            dispatch(setLoader({ loader: false }))
            // yield put({ type: FOR_LOADER, loader: false  })
        } else if(res.status=='fail to send'){
            yield put({ type: USER_DATA, data: res })
            const dispatch = realData.dispatch;
            dispatch(setLoader({ loader: false }))
            // yield put({ type: FOR_LOADER, loader: false  })
            showMessage({ message: res.message, type: 'danger', position: "bottom" });
        }
        else {
            yield put({ type: USER_DATA, data: res })
            dispatch(setLoader({ loader: false }))
            // yield put({ type: FOR_LOADER, loader: false  })
            // showMessage({ message: res.message, type: 'success', position: "bottom" });
        }
    } catch (error) {
        yield put({ type: USER_DATA, data: error })
        const dispatch = _data.payload.dispatch;
        dispatch(setLoader({ loader: false }))
        // yield put({ type: FOR_LOADER, loader: false  })
        // showMessage({ message: error, type: 'danger', position: "bottom" });
    }
}

export function* loginSaga() {
    yield takeLatest(LOGIN, loginSagaFunction);
    // ADD other SAGA
}
