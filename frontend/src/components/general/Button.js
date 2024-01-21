import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Button = ({ title, onPress, icon, color }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Entypo name={icon} size={28} color={color ?? "#f1f1f1"} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f1f1f1',
        marginLeft: 10,
    },
});

export default Button;
