import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Card({ iconName, name }) {
    return (
        <TouchableOpacity
            style={{
                height: 110,
                elevation: 2,
                backgroundColor: "#FFF",
                margin:10,
                borderRadius: 15,
                marginBottom: 10,
                width: 130
            }}
        >
            <View style={{
               flex: 1,
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
               
            }}>
                <Icon name={iconName} size={40} color={'red'} />
                <Text>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}
