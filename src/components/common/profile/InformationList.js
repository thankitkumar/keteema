import React from 'react'
import {
    View, Text, TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
export default function InformationList({ iconname, textname,onpress }) {
    return (
        <View>
            <TouchableOpacity onPress={onpress}>
                <View
                    style={{
                        fontSize: 16,
                        // borderBottomWidth: 2,
                        borderTopWidth: 2,
                        borderColor: '#CDCDCD',
                        flexDirection: 'row',
                        padding: 10,
                    }}
                >
                    <Icon name={iconname} size={26} />
                    <Text style={{ marginLeft: 10, fontSize: 18 }}>
                        {textname}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
