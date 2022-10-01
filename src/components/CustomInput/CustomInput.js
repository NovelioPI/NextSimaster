import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTogglePasswordVisibility} from './useTogglePasswordVisibility';

const CutomInput = ({value, setvalue, placeholder, secureTextEntry}) => {
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setvalue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry ? passwordVisibility : false}
        autoCapitalize="none"
      />

      {secureTextEntry ? (
        <Pressable onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#727272" />
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backfaceVisibility: 'hidden',
    width: '80%',
    height: 50,

    borderBottomWidth: 1,
    marginVertical: 5,

    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
  },
});

export default CutomInput;
