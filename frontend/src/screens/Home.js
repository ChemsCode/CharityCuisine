import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';

const Home = ({ navigation }) => {
    const handleRestaurantPress = () => {
        navigation.navigate('Restaurant');
    };

    const handleFoodBankPress = () => {
        navigation.navigate('FoodBank'); 
    };

    return (
        <View style={styles.container}>

            <Logo style={styles.img} />

            <Text style={styles.title}>Charity Cuisine</Text>
            <Text style={styles.tagline}>Connecting you with the best places to eat and help.</Text>

            {/* <Text style={styles.subtitle}>Choose an Option:</Text> */}
            
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
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    tagline: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        paddingHorizontal: 30,
        marginBottom: 50,
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 20,
        color: '#555',
        textAlign: 'center',
    },
    optionButton: {
        backgroundColor: '#0f690c', // Neutral color for buttons
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10, // Reduced radius
        marginBottom: 15,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
    },
    optionText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffff',
    },
    img: {
        width: 300,
        height: 300,
        marginTop: 0,
    },
});

export default Home;
