import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, ImageBackground, TouchableOpacity, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import man from '../../../assets/images/man.png';

const ClassDetails = ({route, navigation}) => {
    let { course } = route.params;

    const createLecturersTemplate = (lecturer) => {
        return (
            <View style={{flex: 1, justifyContent: 'space-between', maxHeight: 200}}>
                <View>
                    <Image source={man} resizeMode='contain' style={{maxWidth: 100, maxHeight: 150, alignSelf: 'center'}} />
                    <Text style={{marginTop: -10, textAlign: 'center'}}>{lecturer}</Text>
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
                    <Text style={{fontWeight: 'bold', fontSize: 24}}>{course.name}</Text>
                    <Text>{course.day}, {course.time} {course.roomId}</Text>
                </View>
            </View>
            <ScrollView style={{flex: 1, margin: 20}}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>Lecturers</Text>
                <View style={{flexDirection: 'row'}}>
                    {course.Lecturer != null ? createLecturersTemplate(course.Lecturer.name): createLecturersTemplate('anonim')}
                </View>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>Short Description</Text>
                <Text style={{marginTop: 10}}>{course.description}</Text>
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