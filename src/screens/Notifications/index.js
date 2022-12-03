import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomSheet from '../../components/BottomSheet';
import background from'../../../assets/images/background.png';

const Notifications = ({navigation}) => {
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const [selectedNotif, setSelectedNotif] = useState(0)
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetch('http://192.168.100.15:8000/notification/list')
            .then(data => data.json())
            .then((dataJson) => setNotifications(dataJson.data))
            .catch(e => console.log(e))
    }, []);

    const notificationCardTemplate = (course, index) => {
        return (
            <TouchableOpacity style={styles.notificationCard} key={index} onPress={() => onNotifPressed(course)}>
                <Text style={{fontWeight: 'bold'}}>
                    Pengumuman : [{course.Course.code}] {course.Course.name}
                </Text>
                <Text style={{marginVertical: 10}}>
                    {course.description}
                </Text>
            </TouchableOpacity>
        )
    }

    const onNotifPressed = (course) => {
        navigation.navigate('NotificationDetails', {course: course})
    }

    const onBackPressed = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
            <ImageBackground
                source={background}
                style={styles.background}
                resizeMode="cover">

                <Icon
                    name="angle-left"
                    size={50}
                    style={styles.backIcon}
                    onPress={onBackPressed}>
                </Icon>
            </ImageBackground>
            <ScrollView style={styles.container} contentContainerStyle={{paddingVertical: 20}}>
                {notifications.map((course, index) => notificationCardTemplate(course, index))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        minHeight: '10%',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#444'
    },
    backIcon: {
        marginLeft: '5%',
        marginVertical: 'auto'
    },
    container: {
        width: '100%',
        paddingHorizontal: '5%',
        flex: 1
    },
    notificationCard: {
        padding: 10,
        marginVertical: 10,
        borderRadius: 15,
        backgroundColor: '#FFC82F',
        height: 90,
        overflow: 'hidden'
    },
    classInfo: {
        width: '80%',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    resultValue: {
        width: '20%',
        display: 'flex',
        alignItems: 'center'
    },
    markStyle: {
        fontSize: 40,
        includeFontPadding: false,
    },
    resultFooter: {
        height: '12%', 
        flexDirection: 'row', 
        marginHorizontal: 25, 
        borderTopWidth: 1
    },
    IpStyle: {
        fontSize: 35, 
        textAlign: 'right', 
        includeFontPadding: false
    },
    bottomSheetContent: {
        margin: 20,
        justifyContent: 'space-between'
    },
})

export default Notifications;