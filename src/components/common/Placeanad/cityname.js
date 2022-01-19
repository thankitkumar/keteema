import React from 'react'
import {
    View, Text, TouchableOpacity, ScrollView
} from 'react-native'
export default function CityName({ cityname, onmodalchange }) {
    return (
        <View>
            <TouchableOpacity
                onPress={onmodalchange}
            >
                <View
                    style={{
                        fontSize: 16,
                        borderBottomWidth: 1,
                        borderColor: '#CDCDCD',
                        padding: 25,
                    }}
                >
                    <Text style={{ fontSize: 15 }}>
                        {cityname}
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}
