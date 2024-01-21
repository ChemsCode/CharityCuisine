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
        backgroundColor: '#000', // Black color for a sleek look
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 30, // More pronounced rounded corners
        borderWidth: 2, // Adding a border
        borderColor: '#fff', // White border for contrast
        shadowColor: '#fff', // White shadow for a unique effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 6,
        marginBottom: 15,
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff', // White color for text
        marginLeft: 10,
    },
});



export default Button;
