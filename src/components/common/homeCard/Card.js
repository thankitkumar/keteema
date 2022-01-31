import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

   const Card = ({Photo,Price,ProductName,Area,Currency,onpress}) => {
    return (
        <TouchableOpacity
        onPress={onpress}
            style={{
                height: 230,
                elevation: 2,
                backgroundColor: "#FFF",
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 30,
                width: 170
            }}
        >
            <Image
                source={{ uri: Photo }}
                style={{ height: 140, width: 170 }}
            />
            <View style={{
                // flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 10
            }}>
                <Text style={{
                    fontWeight: "bold",
                    fontSize:15,
                    color: "#FF0000",
                }}>{Currency} {Price}</Text>
                <Text style={{
                    fontWeight: "bold",
                    color: "#000000",
                }}>{ProductName}</Text>
                <Text style={{
                    // fontWeight: "bold",
                    color: "#ADABAB",
                }}>{Area}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card