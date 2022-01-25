import React, { useState } from 'react'
import {
  View, Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import InformationList from '../../../common/profile/InformationList';
export default function ProfileScreen({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedCity, setSelectedCity] = useState('Dubai');
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
       <TouchableOpacity>
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU' }}
          style={{ width: 80, height: 80, borderRadius: 100 }}
        />
      </View>
      </TouchableOpacity>
      <ScrollView>
      <InformationList iconname='user' textname='My Ads' onpress={()=>navigation.navigate('MyAdsScreen')}/>
      <InformationList iconname='user' textname='My Saved Searches' onpress={()=>navigation.navigate('SavedSerchesScreen')} />
      <View style={{
        borderBottomWidth: 1,
        borderColor: '#000000',
      }} />
      <Text style={{ fontSize: 18, color: '#000000', paddingVertical: 40, marginLeft: 10 }}>Settings</Text>
      <InformationList iconname='user' textname='My Profile'  onpress={()=>navigation.navigate('MyProfileScreen')} />
      <InformationList iconname='user' textname='City' />
      <View style={styles.pickerView}>
      <Picker
          style={styles.picker}
          selectedValue={selectedCity}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCity(itemValue)
          }>
          <Picker.Item label="All UAE" value="All UAE" />
          <Picker.Item label="Dubai" value="Dubai" />
          <Picker.Item label="Abu Dhabi" value="Abu Dhabi" />
          <Picker.Item label="Ras al Khaimah" value="Ras al Khaimah" />
          <Picker.Item label="Sharjah" value="Sharjah" />
          <Picker.Item label="Fajairah" value="Fajairah" />
          <Picker.Item label="Ajman" value="Ajman" />
        </Picker>
      </View>
      <View style={{ padding:10}} />
      <InformationList iconname='user' textname='Language' />
      <View style={styles.pickerView}>
        <Picker
          style={styles.picker}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Hindi" value="Hindi" />
          <Picker.Item label="Arbi" value="Arbi" />
        </Picker>
      </View>
      <View style={{ padding:10}} />
      <InformationList iconname='user' textname='Support' onpress={()=>navigation.navigate('SupportScreen')}/>
      <InformationList iconname='user' textname='Report an issue' onpress={()=>navigation.navigate('ReportAnIssueScreen')}/>
      <InformationList iconname='user' textname='Terms & Conditions'onpress={()=>navigation.navigate('TermsConditionScreen')} />
      <InformationList iconname='user' textname='Advertising' onpress={()=>navigation.navigate('AdvertisingScreen')}/>
      <InformationList iconname='user' textname='Logout' onpress={()=>navigation.navigate('LogoutScreen')}/>
      <InformationList iconname='user' textname='Delete Account' onpress={()=>navigation.navigate('DeleteAccountScreen')}/>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  pickerView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  picker: {
    width: '90%',
    height: 30,
    backgroundColor: '#eeeeee',
    margin:10

  }
})