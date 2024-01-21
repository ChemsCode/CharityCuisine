import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';


const AddComponent = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');

    const handleInputChange1 = (text) => {
        setInput1(text);
    };

    const handleInputChange2 = (text) => {
        setInput2(text);
    };

    const handleInputChange3 = (text) => {
        setInput3(text);
    }

    const handleInputChange4 = (text) => {
        setInput4(text);
    }

    const handleSubmit = () => {
        // Handle submit logic here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Add a New Restaurant</Text>
            <TextInput
                style={styles.input}
                placeholder="Foodbank Name"
                value={input1}
                onChangeText={handleInputChange1}
            />
            <TextInput
                style={styles.input}
                placeholder="Location"
                value={input2}
                onChangeText={handleInputChange2}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={input3}
                onChangeText={handleInputChange3}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={input4}
                onChangeText={handleInputChange4}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default AddComponent;
