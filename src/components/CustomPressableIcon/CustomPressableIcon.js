import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomPressableIcon = ({
  onPress,
  iconName,
  iconSize,
  iconColor,
  style,
}) => {
  return (
    <Pressable onPress={onPress} style={style}>
      <MaterialCommunityIcons
        name={iconName}
        size={iconSize}
        color={iconColor}
      />
    </Pressable>
  );
};

export default CustomPressableIcon;
