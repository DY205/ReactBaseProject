
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
 
 import Global from '../../global';
import Font from '../../theme/index';
import AppColor from '../../theme/colors'
import Header from '../../components/header/header'
const { ActualHeight, ActualWidth } = Global;

import {useSelector, useDispatch} from 'react-redux';

 const Profile = (props) => {
  const dispatch = useDispatch();
  const { navigation, route } = props;
  const { params } = route
  const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
    useEffect(() => {
    }, [])

    return (
      <View  style={styles.container}>
      <Header style={{ paddingHorizontal: 0 }} isBack={true} title={'Profile'} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems:'center' }}> 
          <Text style={styles.text}>Welcome to Profile screen</Text>
      </View>
    </View>
          
      );

     

 }
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    fontSize: Font.fontSize.ft22,
    margin: 5,
    lineHeight: 28,
    color: AppColor.black,
    marginTop: 15,
    marginTop: 15,
  }
 });
 
 export default Profile;
 