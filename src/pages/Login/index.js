/* eslint-disable react-native/no-inline-styles */
import React, {Component, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTogglePasswordVisibility} from './useTogglePasswordVisibility';
import background from '../../assets/images/login-bg.png';
import simaster from '../../assets/images/logo-simaster.png';

export default class Login extends Component {
  render() {
    return (
      <View style={this.styles.container}>
        <this._loginView />
        <this._loginUser />
      </View>
    );
  }

  _loginView = () => {
    return (
      <View style={this.styles.overlay}>
        <View style={this.styles.backgroundContainer}>
          <Image source={background} />
        </View>
        <View style={this.styles.logoContainer}>
          <Image source={simaster} style={this.styles.logo} />
        </View>
        <View style={this.styles.watermarkContainer}>
          <Text>2022. Simaster Reserved by UGM</Text>
        </View>
      </View>
    );
  };

  _loginUser = () => {
    const {passwordVisibility, rightIcon, handlePasswordVisibility} =
      useTogglePasswordVisibility();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <View style={this.styles.overlay}>
        <View style={this.styles.inputContainer}>
          <View style={this.styles.inputView}>
            <TextInput
              name="Username"
              placeholder="Email UGM"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View style={this.styles.inputView}>
            <TextInput
              name="password"
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={passwordVisibility}
              value={password}
              enablesReturnKeyAutomatically
              onChangeText={text => setPassword(text)}
            />
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons
                name={rightIcon}
                size={22}
                color="#232323"
              />
            </Pressable>
          </View>

          <TouchableOpacity style={this.styles.forgetButton}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={this.styles.loginButton}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={{fontWeight: 'bold'}}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundContainer: {
      position: 'absolute',
    },
    logoContainer: {
      alignItems: 'center',
    },
    logo: {
      width: Dimensions.get('screen').width * 0.7,
      height: undefined,
      aspectRatio: 1,
      marginTop: Dimensions.get('screen').height * 0.08,
    },
    watermarkContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      bottom: 14,
    },
    overlay: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
    },
    inputView: {
      borderBottomWidth: 1,
      width: '70%',
      height: 50,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    inputContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: '20%',
    },
    forgetButton: {
      width: '70%',
      marginTop: 5,
      alignItems: 'flex-end',
    },
    loginButton: {
      width: '70%',
      borderRadius: 20,
      backgroundColor: '#FFC82F',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      marginTop: 40,
    },
  });
}
