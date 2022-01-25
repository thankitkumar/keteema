import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function EmailCard() {
    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text>logo</Text>
                </TouchableOpacity>
                <View style={styles.buttonview}>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>EMAIL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>CALL</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    buttonview: {
        flexDirection: 'row',
    },
    button: {
        borderWidth: 1,
        borderColor: 'red',
        marginRight: 10,
        padding:8,
        borderRadius:6
    },
    buttonText:{
        color:'#000000'
    }
});
