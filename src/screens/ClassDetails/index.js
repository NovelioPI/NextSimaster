import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, ImageBackground, TouchableOpacity, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import man from '../../../assets/images/man.png';

const ClassDetails = ({route, navigation}) => {
    const classData = [
        {
            name: 'Pemrograman Jaringan dan Piranti Bergerak',
            day: 'Selasa',
            time: '13.30-14.30',
            place: 'Ruang S1 202',
            lecturers: [
                {
                    name: 'Dosen 1',
                },
                {
                    name: 'Dosen 1',
                },
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
    ]

    const classInfo = classData[0];

    const createLecturersTemplate = (lecturer, index) => {
        return (
            <View style={{flex: 1, justifyContent: 'space-between', maxHeight: 200}} key={index}>
                <View>
                    <Image source={man} resizeMode='contain' style={{maxWidth: 100, maxHeight: 150, alignSelf: 'center'}} />
                    <Text style={{marginTop: -10, textAlign: 'center'}}>{lecturer.name}</Text>
                </View>
            </View>
        )
    }

    const onBackPressed = () => {
        navigation.goBack()
    }

    return (
        <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
            <View style={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: '#FFC82F', minHeight: '20%', justifyContent: 'space-between'}}>
                <Icon
                    name="angle-left"
                    size={50}
                    style={styles.backIcon}
                    onPress={onBackPressed}>
                </Icon>
                <View style={{padding: 20}}>
                    <Text style={{fontWeight: 'bold', fontSize: 24}}>{classInfo.name}</Text>
                    <Text>{classInfo.day}, {classInfo.time} {classInfo.place}</Text>
                </View>
            </View>
            <ScrollView style={{flex: 1, margin: 20}}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>Lecturers</Text>
                <View style={{flexDirection: 'row'}}>
                    {classInfo.lecturers.map((lecturer, index) => createLecturersTemplate(lecturer, index))}
                </View>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>Short Description</Text>
                <Text style={{marginTop: 10}}>{classInfo.description}</Text>
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
        marginVertical: 20,
        color: '#FFFFFF'
    },
    container: {
        width: '100%',
        paddingHorizontal: '5%',
        flex: 1
    },
})

export default ClassDetails