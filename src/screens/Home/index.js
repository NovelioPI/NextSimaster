/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import socket from '../../utils/socket';
import CustomPressableIcon from '../../components/CustomPressableIcon/CustomPressableIcon';
import CustomButton from '../../components/CustomButton';
import notifee from '@notifee/react-native';
import background from '../../../assets/images/home-bg.png';
import man from '../../../assets/images/man.png';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const Home = ({navigation}) => {
  const [notifications, setNotifications] = useState([]);
  const [classes, setClasses] = useState([]);
  const [newNotification, setNewNotification] = useState([]);
  const [read, setRead] = useState(true);
  const [index, setIndex] = useState(0)
  const isCarousel = useRef(null)

  const onClassPressed = (course) => {
    navigation.navigate('ClassDetails', {course: course})
  } 

  const onDisplayNotification = async (notif) => {
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
      id : 'default',
      name: 'default channel'
    });

    await notifee.displayNotification({
      title: notif.title,
      body: notif.Course.name,
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    })
  }

  useEffect(() => {
    socket.on('newNotification', async (notif) => {
      const newNotif = JSON.parse(notif)
      setNewNotification((prev) => [...prev, newNotif])
      onDisplayNotification(newNotif)
      setRead(false)
    })
  }, [socket]);

  useEffect(() => {
    fetch('http://192.168.100.15:8000/course/list')
      .then(data => data.json())
      .then((dataJson) => setClasses(dataJson.data))
      .catch(e => console.log(e))
  }, [])

  const onNotificationPressed = () => {
    if (newNotification.length != 0) {
      setNotifications((prev) => [...prev, newNotification])
      setNewNotification([])
      setRead(true)
    }
    navigation.navigate('Notifications')
  }

  const classTemplate = ({item}) => {
    return (
      <TouchableOpacity style={styles.class} onPress={() => onClassPressed(item)} key={index}>
        <View style={{display: 'flex', flexDirection: 'row', padding: 10}}>
          <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40%'}}>
            <View style={{borderRadius: 20, backgroundColor: 'white', overflow: 'hidden', height: '95%', width: '80%'}}>
              <Image source={man} resizeMode='contain' style={{maxWidth: 100, maxHeight: 150, alignSelf: 'center'}}></Image>
            </View>
          </View>
          <View style={{flex: 2, justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
            <View style={{paddingRight: 10}}>
              <Text style={{fontSize: 16, textAlign: 'right'}}>{item.day}</Text>
              <Text style={{fontSize: 16, textAlign: 'right'}}>{item.time}</Text> 
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

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
            iconName={read ? "bell" : "bell-badge"}
            iconSize={40}
            iconColor="#494C4E"
            onPress={onNotificationPressed}
            style={styles.notification}
          />
        </View>

        <Text style={styles.greeting}>Good morning!</Text>
        <Carousel
          layout="default"
          layoutCardOffset={9}
          ref={isCarousel}
          data={classes}
          renderItem={classTemplate}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
          onSnapToItem={(index) => setIndex(index)}
        />
        <Pagination
          style={{marginTop: 50}}
          dotsLength={classes.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
        <View style={{height: '50%', width: '90%'}}>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={{backgroundColor: '#FFC82F', height: 100, margin: 10, flex: 1, borderRadius: 20, elevation: 7,}}></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#FFC82F', height: 100, margin: 10, flex: 1, borderRadius: 20, elevation: 7,}}></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#FFC82F', height: 100, margin: 10, flex: 1, borderRadius: 20, elevation: 7,}}></TouchableOpacity>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={{backgroundColor: '#FFC82F', height: 100, margin: 10, flex: 1, borderRadius: 20, elevation: 7,}}></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#FFC82F', height: 100, margin: 10, flex: 1, borderRadius: 20, elevation: 7,}}></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#FFC82F', height: 100, margin: 10, flex: 1, borderRadius: 20, elevation: 7,}}></TouchableOpacity>
          </View>
        </View>
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
  class: {
    borderRadius: 20,
    elevation: 7,
    alignItems: 'center',
    backgroundColor: '#FFC82F',
  }
});

export default Home;
