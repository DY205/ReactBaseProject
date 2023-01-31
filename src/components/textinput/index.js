import React, { forwardRef } from "react";
import {View, TextInput, StyleSheet} from 'react-native';
import Font from '../../theme';

const TextInputBox = forwardRef((props, ref) => {
  const { value,onChangeText, placeholder, maxLength, editable, keyboardType,} = props;
  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <TextInput
          autoCorrect={false}
          style={styles.textInputStyle}
          value={String(value)}
          keyboardType={keyboardType || 'default'}
          placeholder={placeholder}
          placeholderTextColor={'#9B9B9B'}
          onChangeText={e => onChangeText(e)}
          editable={editable}
          autoCapitalize={placeholder?.includes('name')  ? 'sentences' : 'none'}
          maxLength={maxLength}
          {...props}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
    container: {
      height: 45,
      width: '100%',
      backgroundColor: '#F4F7F8',
      borderColor: '#E6EEF2',
      borderWidth: 1,
      justifyContent: 'center',
      padding: 3,
      borderRadius: 12,
      flexDirection: 'row',
      //marginBottom: 15,
      paddingLeft: 15,
      //backgroundColor: 'red',
    },
    firstView: {
      width: '100%',
      justifyContent: 'center',
    },
    textInputStyle: {
      height: 45,
      color: '#292825',
      fontSize: Font.fontSize.ft16,
      fontFamily: Font.fontFamily.robotoLight,
      textAlignVertical: 'center',
    },
  });

export default TextInputBox;
