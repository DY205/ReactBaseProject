import { Dimensions } from 'react-native';
//==============FOR ENCRYPTION PURPOSE =================================//
const userKey = 'PROJECTNAME_USER_HOLDER';
//=========================STORE PARAMS  ============================//
const storeParams = {
  keychainService: 'accounts_example_app_ios',
  sharedPreferencesName: 'accounts_example_app_android',
};
//===================auth Token =======================================//
export var authToken = '';
//====================Actual Height ==================================//
const ActualHeight = (height: number) => {
  return (Dimensions.get('window').height * height) / 640;
};
//==================== width ======================================//
const ActualWidth = (width: number) => {
  return (Dimensions.get('window').width * width) / 360;
};
//=========================Base Urls ==============================//
const BASE_URL = {
  DEV: 'https://hmclmobazfun02p-dev-old.azurewebsites.net/api/cloudware_prod?ORG_ID=HMC', // Development URL or Staging Url
  STAG: '',
  PROD: 'https://hmclmobazfun02p-dev-old.azurewebsites.net/api/cloudware_prod?ORG_ID=HMC',// Production URL or Live Url
};
const PAS_KEY = 'BSuXZhrGbmR7c6UyKyHajfmGcT3g2T22PAB3CEnQp8Dpc95XvHZW3t5CJVtsZFBCNaGkcwZBCaSSKG4NBwzKeXYbh755aMJCdGEGuAx44ctzUYuCgL8ctZskf'
/// ==============export and use all the Constant with in your apps ========================//
const Constants = {
  userKey,
  storeParams,
  ActualHeight,
  ActualWidth,
  BASE_URL,
  PAS_KEY
};
export default Constants;
