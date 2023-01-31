// @ts-ignore
import Global from '../global/index';
import {Platform} from 'react-native';
const {ActualWidth} = Global;

const FontSize = {
  ft6: ActualWidth(6.4),
  ft8: ActualWidth(8),
  ft10: ActualWidth(10),
  ft12: ActualWidth(12),
  ft13: ActualWidth(13),
  ft14: ActualWidth(14),
  ft16: ActualWidth(16),
  ft15: ActualWidth(15),
  ft18: ActualWidth(18),
  ft19: ActualWidth(19),
  ft20: ActualWidth(20),
  ft21: ActualWidth(21),
  ft22: ActualWidth(22),
  ft23: ActualWidth(23),
  ft24: ActualWidth(24),
  ft25: ActualWidth(25),
  ft26: ActualWidth(26),
  ft27: ActualWidth(27),
  ft28: ActualWidth(28),
  ft29: ActualWidth(29),
  ft30: ActualWidth(30),
  ft37: ActualWidth(37),
  ft49: ActualWidth(49),
};
const btnFont = {
  ft10: 10,
  ft11: 11,
  ft12: 12,
  ft13: 13,
  ft14: 14,
  ft15: 15,
  ft16: 16,
  ft17: 17,
  ft18: 18,
  ft19: 19,
  ft20: 20,
  ft21: 21,
  ft22: 22,
  ft23: 23,
  ft24: 24,
  ft25: 25,
  ft26: 26,
  ft27: 27,
  ft28: 28,
  ft29: 29,
  ft30: 30
};

const LineHeight = {
  lh8: ActualWidth(8),
  lh10: ActualWidth(10),
  lh12: ActualWidth(12),
  lh14: ActualWidth(14),
  lh16: ActualWidth(16),
  lh18: ActualWidth(18),
  lh20: ActualWidth(20),
  lh22: ActualWidth(22),
  lh24: ActualWidth(24),
  lh26: ActualWidth(26),
  lh28: ActualWidth(28),
  lh30: ActualWidth(30),
  lh32: ActualWidth(32),
  lh34: ActualWidth(34),
};

const fontFamily = {
  boldCal: Platform.OS === 'ios' ? 'Calibri' : 'calibrib',
  boldItalicCal: Platform.OS === 'ios' ? 'Calibri' : 'calibriz',
  italicCal: Platform.OS === 'ios' ? 'Calibri' : 'calibrili',
  lightCal: Platform.OS === 'ios' ? 'Calibri' : 'calibril',
  mediumCal: Platform.OS === 'ios' ? 'Calibri' : 'calibrii',
  regularCal: Platform.OS === 'ios' ? 'Calibri' : 'calibri',
  roboto: 'Roboto-Black',
  robotoBold: 'Roboto-Bold',
  robotoLight: 'Roboto-Light',
};

const Font = {
  fontSize: FontSize,
  LineHeight: LineHeight,
  fontFamily: fontFamily,
  customFont: btnFont
};

export default Font;

