import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

export default function Headerfilter() {
    return (
        <View style={styles.button}>
            <TouchableOpacity style={styles.viewbutton}>
                <Icon name='search' size={20} />
                <Text style={styles.text}>SEARCH ALERT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewbutton}>
                <Icon name='filter' size={20} />
                <Text style={styles.text}>FILTER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewbutton}>
                <Icon name='sort' size={20} />
                <Text style={styles.text}>SORT</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#fff',
        padding:18
        

    },
    viewbutton: {
        flexDirection: 'row',


    },
    text: {
        color: '#000000',
        margin: 2
    }
});

