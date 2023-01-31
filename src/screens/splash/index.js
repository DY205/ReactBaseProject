/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useRef, useState } from "react";
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,TextInput
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import Button from '../../components/button/index'
 import Global from '../../global';
import Font from '../../theme/index';
import AppColor from '../../theme/colors'
const { ActualHeight, ActualWidth } = Global;

import {useSelector, useDispatch} from 'react-redux';
import { verifyOtpAction } from '../../redux/actions/loginActions';



 const Splash = (props) => {
  const dispatch = useDispatch();
  const { navigation, route } = props;
  const { params } = route
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
    useEffect(() => {
      // loginAction()

    }, [])

    const loginAction=()=>{
      const data = {
        "0": '9999999999',
        "1": "",
        "2": "",
        "3": "B2B"
    }
    // setLoading(true);
    const request = dataRequest(data, "", "MB_Authentication", false, '1');
    dispatch(verifyOtpAction({ request, navigation, isLogin: false, dispatch }))
    }

    const dataRequest = (
      data,
      token,
      link,
      isMultiple,
      in_progress_id
  ) => {
      return {
          header: {
              IN_PROCESS_ID: in_progress_id,
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

    return (
      <View style={styles.sectionContainer}>
      <StatusBar barStyle="light-content" backgroundColor="green" translucent={true} />
      <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={styles.sectionContainer}>
          <View>
                            <Text style={styles.loginHeading}>Log In</Text>

                            <View style={styles.feildContainer}>
                                {/* <Image source={IMAGES.PHONE_ICON} style={Styles.phoneIcon} /> */}
                                <Text style={styles.text}>+91</Text>
                                <TextInput
                                    value={'999999999'}
                                    placeholder={'Mobile Number'}
                                    keyboardType={'phone-pad'}
                                    style={styles.textInput}
                                    onChangeText={console.log('Input')}
                                    maxLength={10}
                                />

                            </View>
                            {/* <TouchableOpacity disable={true}
                                onPress={() => goToOtp()}
                                style={styles.btnLogin}>
                                <Text style={styles.textBtnLogin}>Proceed</Text>
                            </TouchableOpacity> */}

                        </View>

      
      <Button
        disabled={false}
        value='Submit'
        onPress={console.log("Button Pressed")}
        {...props}>
      {/* disabled, value = '', onPress = none, ...props */}
      </Button>
    </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </View>
          
      );

     

 }
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
     backgroundColor:'#e6e6e6'
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
     marginTop:20,
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   }, 
textBtnLogin: {
    padding: 10,
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
},

feildContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    width: 277,
    backgroundColor: "Green",
    borderRadius: 6,
    paddingLeft: 10,
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
}, loginMainBox: {
  borderRadius: 14,
  margin: 20,
  backgroundColor: AppColor.white,
  padding: 25,
  alignContent: "center",
  justifyContent: "center"
},
loginHeading: {
  fontSize: Font.fontSize.ft22,
  margin: 5,
  // fontFamily: Font.fontFamily.regularCal,
  lineHeight: 28,
  color: AppColor.blackTwo,
  marginTop: 15,
  marginTop: 15,
},
btnLogin: {
  backgroundColor: AppColor.appColor,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: AppColor.appColor,
  textAlign: 'center',
  marginTop: 30,
},
textBtnLogin: {
  padding: 10,
  color: AppColor.white,
  fontSize: Font.fontSize.ft18,
  textAlign: 'center',
  fontFamily: Font.fontFamily.regular,
},

feildContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  height: 55,
  width: ActualWidth(277.1),
  backgroundColor: AppColor.lightGray,
  borderRadius: ActualHeight(6),
  paddingLeft: ActualWidth(10.8),
},
phoneIcon: {
  height: ActualHeight(22.0),
  width: ActualWidth(13.5),
  resizeMode: 'contain',
  marginRight: ActualWidth(14.9),
},
text: {
  // fontFamily: Font.fontFamily.regularCal,
  fontSize: Font.fontSize.ft16,
  color: AppColor.black_55,
  width: ActualWidth(30),
  marginRight: ActualWidth(8),
},
textInput: {
  // fontFamily: Font.fontFamily.regularCal,
  fontSize: Font.fontSize.ft16,
  color: AppColor.black_55,
  flex: 1,
},
logo: {
  marginBottom: ActualHeight(10.6),
  height: ActualHeight(68.1),
  width: ActualWidth(47.5),
  resizeMode: 'contain',
},
logoView: {
  flex: 1,
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center'
}
 });
 
 export default Splash;
 