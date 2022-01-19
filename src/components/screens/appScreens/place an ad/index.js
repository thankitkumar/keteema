import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, ScrollView, Button, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import CityName from '../../../common/Placeanad/cityname';
import Card from '../../../common/Placeanad/Card';
export default function PlaceAnAdScreen() {
    const [firstModal, setFirstModal] = useState(false)
    const [selectedCity, setSelectedCity] = useState('Dubai');
    const onmodalchange = () => {
        setFirstModal(true)
    }

    return (
        <View>
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                    <Text style={{ fontSize: 23, color: '#000000', fontWeight: 'bold' }}>Select a City</Text>
                    <Text>Where should we place your ad?</Text>
                </View>
                <CityName cityname='All UAE' onmodalchange={onmodalchange} />
                <CityName cityname='Dubai' onmodalchange={onmodalchange} />
                <CityName cityname='Abu Dhabi' onmodalchange={onmodalchange} />
                <CityName cityname='Ras al Khaimah' onmodalchange={onmodalchange} />
                <CityName cityname='Sharjah' onmodalchange={onmodalchange} />
                <CityName cityname='Fajairah' onmodalchange={onmodalchange} />
                <CityName cityname='Ajman' onmodalchange={onmodalchange} />
                <CityName cityname='india' onmodalchange={onmodalchange} />
            </ScrollView>
            <Modal
                visible={firstModal}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <Text style={{ fontSize: 23, color: '#000000', fontWeight: 'bold' }}>Where are you listing?</Text>
                    <Text>choose the category that your ad fits into.</Text>
                    <View style={{padding:10}}/>
                    <View style={styles.card}>
                        <Card name='Motors' iconName='car' />
                        <Card name='Jobs' iconName='black-tie' />
                    </View>
                    <View style={styles.card}>
                        <Card name='Property for Sale' iconName='home' />
                        <Card name='Property for Rent' iconName='hospital-o' />
                    </View>
                    <View style={styles.card}>
                        <Card name='Community' iconName='male' />
                        <Card name='Classifieds' iconName='shirtsinbulk' />
                    </View>
                    <TouchableOpacity
                        onPress={() => setFirstModal(false)}>
                        <View>
                            <Text>click here</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
