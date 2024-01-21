import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import CameraComponent from '../components/restaurants/CameraComponent';
import LeaderboardComponent from '../components/foodbanks/LeaderboardComponent';

const Tab = createBottomTabNavigator();

const RestaurantScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'List') {
                        iconName = 'restaurant-menu'; // Example icon for List
                    } else if (route.name === 'Camera') {
                        iconName = 'camera-alt'; // Example icon for Camera
                    } else if (route.name === 'Leaderboard') {
                        iconName = 'leaderboard'; // Example icon for Leaderboard
                    }

                    // Return the icon component
                    return <MaterialIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    paddingBottom: 5,
                    height: 60,
                    borderTopColor: '#eee',
                    borderTopWidth: 2,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="List" component={ListScreen} />
            <Tab.Screen name="Camera" component={CameraComponent} />
            <Tab.Screen name="Leaderboard" component={LeaderboardComponent} />
        </Tab.Navigator>
    );
};

const ListScreen = () => {
    return (
        <View style={styles.container}>
            <Text>List of something</Text>
            {/* Your list component goes here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // ... add more styles if needed
});

export default RestaurantScreen;
