import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function CategoriesCard({ iconName, name,onpress }) {
    return (
        <TouchableOpacity
        onPress={onpress}
            style={{
                height: 130,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 10,
                marginTop: 10,
                borderRadius: 15,
                marginBottom: 10,
                width: 100
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
