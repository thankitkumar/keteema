import React from 'react'
import { View, Text,Image } from 'react-native'

export default function ChatsScreen() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center',flex:1 }}>
            <Image
                source={require('../../../../assets/img/empty.png')}
                style={{ height: 250, width: 250, margin: '10%' }}
            />
              <Text style={{ fontSize: 16, color: '#000000', textAlign: 'center', width: '80%' }}>It's like a desert in here! You don't have any any chat massage yet.Connect with other Keteema for your next best deal!</Text>
        </View>
    )
}
