import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomSheet from '../../components/BottomSheet';
import background from'../../../assets/images/background.png';

const Requests = ({navigation}) => {
    const requests = [
        {
            name: 'Pengajuan Ijin Aktif',
            id: '1234567890',
            status: 'Proses',
            major: 'Elektronika dan Instrumentasi',
            createdTime: '2022-02-12 16:07:55',
            updateTimte: '2022-02-15 16:07:55',
            period: 'Genap 2022/2023'
        },
        {
            name: 'Pengajuan Cuti Mahasiswa',
            id: '1234567890',
            status: 'Disetujui',
            major: 'Elektronika dan Instrumentasi',
            createdTime: '2022-02-12 16:07:55',
            updateTime: '2022-02-15 16:07:55',
            period: 'Ganjil 2022/2023'
        },
        {
            name: 'Pengajuan Surat Aktif Kuliah',
            id: '1234567890',
            status: 'Ditolak',
            major: 'Elektronika dan Instrumentasi',
            createdTime: '2022-02-12 16:07:55',
            updateTime: '2022-02-15 16:07:55',
            period: 'Ganjil 2022/2023'
        }
    ];

    const setColorStatus = (status) => {
        let backgroundColor = '#0D98B9';
        if (status == 'Disetujui') {
            backgroundColor = '#53C86B';
        } else if (status == 'Ditolak') {
            backgroundColor = '#E46050'
        }
        return <Text style={{ backgroundColor: backgroundColor, borderRadius: 15, width: '100%', color: '#FFFFFF', textAlign: 'center', padding: 10}}>{status}</Text>
    }

    const onBackPressed = () => {
        navigation.navigate('Home');
    }

    const onRequestPressed = (request) => {
        navigation.navigate('RequestDetails', {request: request})
    } 
    
    const requestCardTemplate = (request, index) => {
        return (
            <TouchableOpacity style={styles.requestCard} key={index} onPress={() => onRequestPressed(request)}>
                <View style={styles.requestInfo}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>
                        {request.name}
                    </Text>
                    <Text style={{marginBottom: 5, marginTop: 10}}>
                        {request.period}
                    </Text>
                    <Text>
                        Diajukan {request.createdTime}
                    </Text>
                </View>
                <View style={styles.requestStatus}>
                    {setColorStatus(request.status)}
                </View>
            </TouchableOpacity>
        )
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
                {requests.map((request, index) => requestCardTemplate(request, index))}
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
    requestCard: {
        padding: 20,
        marginVertical: 10,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFC82F'
    },
    requestInfo: {
        width: '70%',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    requestStatus: {
        width: '30%',
        alignItems: 'center', 
        justifyContent: 'center',
    },
})

export default Requests;