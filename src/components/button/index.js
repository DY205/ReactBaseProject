import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './styles';

const none = () => {};
const Botton = ({disabled, value = '', onPress = none, ...props}) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        disabled={disabled}
        style={Styles.ButtonStyle}
        onPress={onPress}
        {...props}>
        <Text style={Styles.textStyle}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Botton;
