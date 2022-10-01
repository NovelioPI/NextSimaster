import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({onPress, text, type = '1', bgColor, fgColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 40,
    borderRadius: 20,
  },
  container_1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC82F',
  },
  container_2: {
    alignItems: 'flex-end',
  },
  text: {},
  text_1: {
    fontWeight: 'bold',
  },
});

export default CustomButton;
