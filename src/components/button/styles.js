import {StyleSheet, Platform} from 'react-native';
// import {fontSizes, fontFamily} from '../../Themes/index';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
    // fontSize: fontSizes.two,
    // fontFamily: fontFamily.Bold,
  },
  ButtonStyle: {
    backgroundColor: 'rgb(149 ,27, 30)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: '100%',
    marginTop: 5,
    borderRadius: 12,
  },
});
