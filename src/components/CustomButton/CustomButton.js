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
  container: {},
  container_1: {
    width: '80%',
    height: 40,
    borderRadius: 20,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#FFC82F',
  },
  container_2: {
    width: '80%',
    height: 40,
    alignItems: 'flex-end',
  },
  container_3: {
    width: '90%',
    height: 150,
    borderRadius: 10,

    alignItems: 'flex-end',
    // alignItems: 'center',
    // justifyContent: 'center',

    backgroundColor: '#FFC82F',
  },
  text: {},
  text_1: {
    fontWeight: 'bold',
  },
  text_2: {
    color: '#FFC82F',
  },
  text_3: {
    fontWeight: 'bold',
    right: 0,
    up: 0,
  },
});

export default CustomButton;
