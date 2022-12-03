import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomSelectDropdown from '../../components/CustomSelectDropdown';
import background from'../../../assets/images/background.png';
import BottomSheet from '../../components/BottomSheet';

const NotificationDetails = ({route, navigation}) => {

    let { course } = route.params;

    const onBackPressed = () => {
        navigation.goBack()
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
            <View style={styles.container}>
                <Text>PENGUMUMAN {course.Course.code} {course.Course.name}</Text>
                <Text>Pengumuman</Text>
                <Text>Matakuliah: {course.Course.code} {course.Course.name}</Text>
                <Text>Kelas: {course.Course.Class.name}</Text>
                <Text>Dosen: {course.Course.Lecturer.name}</Text>
                <Text>Pengumuman: {course.title}</Text>
                <Text>{course.description}</Text>
                <Text>Silahkan cek di Akun Simaster anda</Text>
                <Text>{course.updateAt}</Text>
            </View>
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
})

export default NotificationDetails;
