/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';

export default class Home extends Component {
  render() {
    return <Text>Hello</Text>;
  }

  _hello = () => {
    <View style={this.styles.container}>
      <Text>Hello, world!</Text>
    </View>;
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
