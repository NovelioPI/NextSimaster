import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomSelectDropdown from '../../components/CustomSelectDropdown';
import background from'../../../assets/images/background.png';
import BottomSheet from '../../components/BottomSheet';

const StudyResut = ({navigation}) => {
    const [selected, setSelected] = useState();
    const [showBottomSheet, setShowBottomSheet] = useState(false)

    const dataPeriod = [
        'Semester Gasal 2022/2023',
        'Semester Genap 2022/2023'
    ];

    const dataStudy = [
        {
            'name': 'Pemrograman Jaringan dan Piranti Bergerak',
            'mark'  : 'A',
            'value' : '4.00',
            'class' : 'EL A',
            'credit': 3
        },
        {
            'name': 'Instrumentasi Cerdas',
            'mark'  : 'B',
            'value' : '3.25',
            'class' : 'EL A',
            'credit': 2
        },
        {
            'name': 'Seminar',
            'mark'  : 'C',
            'value' : '2.25',
            'class' : 'EL A',
            'credit': 1
        },
        {
            'name': 'Seminar',
            'mark'  : 'D',
            'value' : '1.50',
            'class' : 'EL A',
            'credit': 1
        },
        {
            'name': 'Seminar',
            'mark'  : 'E',
            'value' : '0',
            'class' : 'EL A',
            'credit': 1
        },
    ];

    const kumulatifResult = 4;

    const studyCardTemplate = (course) => {
        let backgroundColor = '#c4c4c4';
        if (course.value >= 3.5) 
            backgroundColor = '#53C86B';
        else if (course.value <= 3.25 && course.value >= 2.50) 
            backgroundColor = '#A3C853';
        else if (course.value <= 2.25 && course.value >= 1.75)
            backgroundColor = '#FFC82F';
        else if (course.value < 1.75 && course.value >= 1)
            backgroundColor = '#E8A240';
        else if (course.value < 1)
            backgroundColor = '#E46050';

        return (
            <View style={{...styles.resultCard, backgroundColor: backgroundColor}}>
                <View style={styles.classInfo}>
                    <Text style={{fontWeight: 'bold'}}>
                        {course.name}
                    </Text>
                    <Text style={{marginTop: 20}}>
                        Kelas: {course.class}
                    </Text>
                </View>
                <View style={styles.resultValue}>
                    <Text style={styles.markStyle}>{course.mark}</Text>
                    <Text>{course.value}</Text>
                    <Text>{backgroundColor}</Text>
                </View>
            </View>
        )   
    }

    const studyValuesTemplate = (course) => {
        return (
            <View style={{flexDirection: 'row'}}>
                <View style={styles.classInfo}>
                    <Text style={{fontWeight: 'bold'}}>
                        {course.name}
                    </Text>
                    <Text style={{marginTop: 10}}>
                        Jumlah SKS: {course.credit}
                    </Text>
                </View>
                <View style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end', //Centered vertically
                    flex:1}}>
                    <Text>{course.value}</Text>
                </View>
            </View>
        )
    }

    const getSummation = (data) => {
        let sum = 0;
        data.forEach(d => {
            sum = sum + d
        })
        return sum
    }

    const onBackPressed = () => {
        navigation.navigate('Home');
    }

    const hide = () => setShowBottomSheet(false);
    const show = () => setShowBottomSheet(true);

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

            <View
                style={styles.container}>
                <CustomSelectDropdown data={dataPeriod} setSelected={setSelected}/>
                <ScrollView style={{marginVertical: 10}}>
                    {dataStudy.map(course => studyCardTemplate(course))}
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.resultFooter} onPress={show}>
                <View style={{flex: 1, paddingRight: 30}}>
                    <Text>Indeks Prestasi Kumulatif</Text>
                    <Text style={styles.IpStyle}>4.00</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text>Indeks Prestasi Semester</Text>
                    <Text style={styles.IpStyle}>4.00</Text>
                </View>
            </TouchableOpacity>

            <BottomSheet show={showBottomSheet} height={400} onOuterClick={hide}>
                <View style={styles.bottomSheetContent}>
                    <ScrollView style={{maxHeight: '70%'}}>
                        {dataStudy.map(course => studyValuesTemplate(course))}
                    </ScrollView>
                    <View>
                        <View style={{flexDirection: 'row', marginTop: 40, paddingTop: 10, borderTopWidth: 1}}>
                            <View style={{...styles.classInfo}}>
                                <Text>
                                    Total SKS: {getSummation(dataStudy.map(course => course.credit))}
                                </Text>
                            </View>
                            <View style={{
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end', //Centered vertically
                                flex:1}}>
                                <Text>{getSummation(dataStudy.map(course => course.credit * course.value))}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10, paddingTop: 10, borderTopWidth: 1}}>
                            <View style={{...styles.classInfo}}>
                                <Text>
                                    Indeks Prestasi Sementara
                                </Text>
                            </View>
                            <View style={{
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end', //Centered vertically
                                flex:1}}>
                                <Text>{kumulatifResult}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </BottomSheet>
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
        marginTop: '5%',
        width: '100%',
        paddingHorizontal: '5%',
        flex: 1
    },
    resultCard: {
        padding: 20,
        marginVertical: 10,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
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
export default StudyResut;