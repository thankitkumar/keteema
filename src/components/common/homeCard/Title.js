import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Title({title}) {
    return (
        <View style={{
            flexDirection: "row",
            paddingHorizontal: 15,
            width: "100%",
            alignItems: "center"
        }}>
            <View style={{ width: "60%" }}>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 14,
                    color: "#585a61"
                }}>{title} </Text>
            </View>
            <View style={{ width: "40%", alignItems: "flex-end" }}>
                <TouchableOpacity >
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 13,
                            color: "#000000"
                        }}><Icon name="arrow-right" size={15} color="#000000" /></Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}
