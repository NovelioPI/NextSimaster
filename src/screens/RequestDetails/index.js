import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomSelectDropdown from '../../components/CustomSelectDropdown';
import background from'../../../assets/images/background.png';
import BottomSheet from '../../components/BottomSheet';

const RequestDetails = ({route, navigation}) => {
    let { request } = route.params;

    const onBackPressed = () => {
        navigation.goBack()
    }

    const setColorStatus = (status) => {
        let backgroundColor = '#0D98B9';
        if (status == 'Disetujui') {
            backgroundColor = '#53C86B';
        } else if (status == 'Ditolak') {
            backgroundColor = '#E46050'
        }
        return <Text style={{ backgroundColor: backgroundColor, borderRadius: 15, width: '100%', color: '#FFFFFF', textAlign: 'center', padding: 10}}>{status}</Text>
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
                <View style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontWeight: 'bold', fontSize: 24}}>{request.name}</Text>
                        <Text style={{fontWeight: 'bold'}}>No.{request.id}</Text>
                    </View>
                    <View style={styles.requestStatus}>
                        {setColorStatus(request.status)}
                    </View>
                </View>
            </View>
            <View style={{flex: 1, padding: 20}}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>Informasi</Text>
                <View>
                    <Text>Diajukan pada {request.createdTime}</Text>
                    <Text>Prodi {request.major}</Text>
                </View>
                <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 20}}>Tahapan</Text>
                <View>
                    <View style={{backgroundColor: '#53C86B', marginHorizontal: '7%', marginTop: 10, borderBottomLeftRadius: 40, borderTopLeftRadius: 40, borderBottomRightRadius: 20, borderTopRightRadius: 20, padding: 10}}>
                        <View style={{backgroundColor: '#FFFFFFF', flexDirection: 'row', alignItems: 'center'}}>
                            <Icon
                                name="check"
                                size={40}
                                style={{backgroundColor: '#FFFFFF', borderRadius: 40, padding: 5}}>
                            </Icon>
                            <View style={{marginLeft: 20}}>
                                <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Permohonan</Text>
                                <Text style={{color: '#FFFFFF'}}>Jadwal s.d. 20 Februari 2022</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{backgroundColor: '#E8A240', marginHorizontal: '7%', marginTop: 10, borderBottomLeftRadius: 40, borderTopLeftRadius: 40, borderBottomRightRadius: 20, borderTopRightRadius: 20, padding: 10}}>
                        <View style={{backgroundColor: '#FFFFFFF', flexDirection: 'row', alignItems: 'center'}}>
                            <Icon
                                name="clock-o"
                                size={40}
                                style={{backgroundColor: '#FFFFFF', borderRadius: 40, padding: 5, minWidth: 50, textAlign: 'center'}}>
                            </Icon>
                            <View style={{marginLeft: 20}}>
                                <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Review dan Verifikasi Prodi</Text>
                                <Text style={{color: '#FFFFFF'}}>Jadwal s.d. 20 Februari 2022</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{backgroundColor: '#E46050', marginHorizontal: '7%', marginTop: 10, borderBottomLeftRadius: 40, borderTopLeftRadius: 40, borderBottomRightRadius: 20, borderTopRightRadius: 20, padding: 10}}>
                        <View style={{backgroundColor: '#FFFFFFF', flexDirection: 'row', alignItems: 'center'}}>
                            <Icon
                                name="close"
                                size={40}
                                style={{backgroundColor: '#FFFFFF', borderRadius: 40, padding: 5, minWidth: 50, textAlign: 'center'}}>
                            </Icon>
                            <View style={{marginLeft: 20}}>
                                <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Approval Dekanat</Text>
                                <Text style={{color: '#FFFFFF'}}>Jadwal s.d. 20 Februari 2022</Text>
                            </View>
                        </View>
                    </View>
                </View>
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
        marginVertical: 20,
        color: '#FFFFFF'
    },
    container: {
        width: '100%',
        paddingHorizontal: '5%',
        flex: 1
    },
})

export default RequestDetails;
