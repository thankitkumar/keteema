import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Body({ text,navigation }) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={require('../../../assets/img/empty.png')}
                style={{ height: 250, width: 250, margin: '10%' }}
            />
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#000000', textAlign: 'center', width: '80%' }}>{text}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>navigation.navigate('PlaceAnAdScreen')}
            >
                <View>
                    <Text style={styles.buttontext}>Post ad now</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{ height: 45,
         width: '80%',
          backgroundColor: '#FF0000', 
          margin: 15, 
          borderRadius: 10, 
          padding: 10, 
        },
        buttontext:{ textAlign: 'center',
         alignItems: 'center',
          fontSize: 17, 
          color: '#fff'
         }
});
