/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import CustomPressableIcon from '../../components/CustomPressableIcon/CustomPressableIcon';
import CustomButton from '../../components/CustomButton';

import background from '../../../assets/images/home-bg.png';
import simaster from '../../../assets/images/logo-simaster.png';

const Home = ({navigation}) => {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={background}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.header}>
          <CustomPressableIcon
            iconName="account-circle"
            iconSize={40}
            iconColor="#494C4E"
            style={styles.profile}
          />
          <CustomPressableIcon
            iconName="line-scan"
            iconSize={40}
            iconColor="#494C4E"
            style={styles.scan}
          />
          <CustomPressableIcon
            iconName="bell"
            iconSize={40}
            iconColor="#494C4E"
            style={styles.notification}
          />
        </View>

        <Text style={styles.greeting}>Good morning!</Text>
        <CustomButton
          text="Pemrograman Jaringan dan Piranti Bergerak"
          type="3"
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
  header: {
    width: '100%',
    height: '10%',

    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  profile: {
    margin: 10,
  },
  notification: {
    margin: 10,
  },
  scan: {
    marginLeft: 'auto',
    margin: 10,
  },
  content: {
    width: '100%',
    height: '90%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',

    margin: 10,
    alignSelf: 'flex-start',
  },
});

export default Home;
