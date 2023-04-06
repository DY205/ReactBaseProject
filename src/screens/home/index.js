import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, TextInput,
  TouchableOpacity,
  Dimensions, Platform, Alert, Linking
} from 'react-native';
import Icons from "../../theme/Icons";
import Button from '../../components/button/index'
import TextInputBox from '../../components/textinput/index'

import Global from '../../global';
import Font from '../../theme/index';
import AppColor from '../../theme/colors'
import Header from '../../components/header/header'
import { alert, isInternetConnected } from "../../utils/helper";
const { ActualHeight, ActualWidth } = Global;
import { widthPercentageToDP } from "react-native-responsive-screen";
import Loader from "../../components/loader/loader";
import NetInfo from "@react-native-community/netinfo";
import { NO_INTERNET } from '../../utils/constants';
import { showMessage } from "react-native-flash-message";
import { useSelector, useDispatch } from 'react-redux';
import { loginOtpAction } from '../../redux/actions/loginActions';

const Home = (props) => {
  const dispatch = useDispatch();
  const getLoaderRes = useSelector((state) => state.forLoader);
  const getUserData = useSelector((state) => state.login);
  const { navigation, route, loading } = props
  const { params } = route
  const [isLoading, setLoading] = useState(false);
  const [userName, setUserName] = useState('Demo');
  const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        // loginAction()

      } else {
        showMessage({ message: NO_INTERNET, type: 'danger', position: "bottom" });
      }
    });
  }, [])

  // useEffect(() => {
  //   if (getLoaderRes) {
  //     setLoading(getLoaderRes.loader)
  //   }
  // }, [getLoaderRes]);

  useEffect(() => {
    if (getUserData) {
      console.log('user redux data',JSON.stringify(getUserData[0]))
      // setLoading(getUserData.data)
    }
  }, [getUserData]);
  
  const loginAction = () => {
    const data = {
      "0": "9968581085",
      "1": "",
      "2": "",
      "3": "B2B"
    }
    setLoading(true);
    const request = dataRequest(data, "", "MB_Authentication", false)
    dispatch(loginOtpAction({ request, navigation, isLogin: false, dispatch }))
  }

  const dataRequest = (
    data,
    token,
    link,
    isMultiple,
  ) => {
    return {
      header: {
        IN_PROCESS_ID: '10',
        OUT_PROCESS_ID: link,
        LOGIN_ID: "",
      },
      isMultiple: isMultiple,
      token: token,
      data: {
        [`${link}`]: {
          Row: [data],
        },
      },
    };
  };

  const onPressed = () => {
    alert("Alert", 'You have entered username '+userName, true)
    var internet = isInternetConnected()
    console.log('internet', internet)
  }

  return (
    <View style={styles.container}>
      {<Header style={{ paddingHorizontal: 0 }} isBack={false} title={'Home'} isBell={true} />}
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <View style={{ flex: 1, justifyContent: 'center', margin: 25 }}>
              <Text style={styles.loginHeading}>Welcome to Home screen</Text>
              <View style={styles.feildContainer}>
                
                {/* <TextInput
                  value={'9999999999'}
                  placeholder={'Mobile'}
                  keyboardType={'phone-pad'}
                  style={styles.textInput}
                  onChangeText={console.log('Input')}
                  maxLength={10}
                /> */}
              </View>

              <TextInputBox
                keyboardType='default'
                onChangeText={(val) => setUserName(val)}
                value={userName}
                placeholder='Username'
                maxLength={30}
              />
              <View style={{marginTop:10}}>
                <Button
                disabled={false}
                value='Submit'
                onPress={() => onPressed()}
                {...props}>
                {/* disabled, value = '', onPress = none, ...props */}
              </Button>
              </View>
              </View>
            </View>
        </ScrollView>

      </View>
      {isLoading && <Loader />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  feildContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    width: 277,
    backgroundColor: "Green",
    borderRadius: 6,
    paddingLeft: 10,
    marginBottom: 20
  },
  phoneIcon: {
    height: 22,
    width: 13,
    resizeMode: 'contain',
    marginRight: 15,
  },
  text: {
    fontSize: 16,
    color: '#000',
    width: 30,
    marginRight: 8,
  },
  textInput: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  loginHeading: {
    fontSize: Font.fontSize.ft22,
    margin: 5,
    fontFamily: Font.fontFamily.roboto,
    lineHeight: 28,
    color: AppColor.blackTwo,
    marginTop: 15,
    marginTop: 15,
  },

});

export default Home;
