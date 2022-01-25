import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Button({ title }) {
    return (
        <TouchableOpacity style={styles.button}>
            <View >
                <Text  style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex:1,
        height: 29,
        borderWidth: 1,
        borderRadius: 17,
        borderColor: '#000000',
        margin: 8,
        
    },
    text:{
        color: '#000000',
        textAlign: 'center',padding:4
    }
});
