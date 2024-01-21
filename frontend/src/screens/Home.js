import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
    const handleRestaurantPress = () => {
        navigation.navigate('RestaurantScreen');
    };

    const handleFoodBankPress = () => {
        navigation.navigate('FoodBankScreen'); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose an Option:</Text>
            <TouchableOpacity style={styles.optionButton} onPress={handleRestaurantPress}>
                <Text style={styles.optionText}>Restaurant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={handleFoodBankPress}>
                <Text style={styles.optionText}>Food Bank</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    optionButton: {
        backgroundColor: '#eaeaea',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    optionText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Home;
