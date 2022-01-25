import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'

export default function SavedSerchesScreen({navigation}) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>

            <Text style={{ fontSize: 16, color: '#FF0000', textAlign: 'center', width: '80%' }}>It's like a desert in here! You don't have any saved searches :)</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('HomeScreen')}
            >
                <View>
                    <Text style={styles.buttontext}>SEARCH FOR SOMEONE</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{ height: 45,
         width: '80%',
          backgroundColor: '#fff', 
          margin: 15, 
          borderRadius: 10, 
          padding: 10, 
        },
        buttontext:{ textAlign: 'center',
         alignItems: 'center',
          fontSize: 17, 
          color: '#000000'
         }
});
