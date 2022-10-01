/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState} from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import background from '../../../assets/images/login-bg.png';
import simaster from '../../../assets/images/logo-simaster.png';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPressed = () => {
    // Dummy
    if (email === 'novelio.p.i' && password === '123') {
      navigation.navigate('Home');
    } else if (email === '' && password === '') {
      console.warn('Email and password cannot be empty!');
    } else {
      console.warn('Email or password wrong!');
    }
  };

  const onForgetPasswordPressed = () => {
    console.warn('Forget password');
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={background}
        style={styles.background}
        resizeMode="cover">
        <Image source={simaster} style={styles.logo} resizeMode="contain" />
        <Text style={styles.watermark}>2022. Simaster Reserved by UGM</Text>

        <CustomInput
          value={email}
          setvalue={setEmail}
          placeholder="Email UGM"
        />
        <CustomInput
          value={password}
          setvalue={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />

        <CustomButton
          text="Forget password?"
          onPress={onForgetPasswordPressed}
          type="2"
          fgColor="#727272"
        />
        <CustomButton
          text="LOGIN"
          onPress={onLoginPressed}
          type="1"
          fgColor="black"
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  background: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    height: '55%',
    maxHeight: 600,
    marginBottom: '7%',
  },
  watermark: {
    position: 'absolute',
    bottom: 14,
  },
});

export default Login;
