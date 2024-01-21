import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraComponent from '../components/restaurants/CameraComponent';

const Tab = createBottomTabNavigator();

const RestaurantScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="List" component={ListScreen} />
            <Tab.Screen name="Camera" component={CameraComponent} />
            <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
        </Tab.Navigator>
    );
};

const ListScreen = () => {
    return (
        <View>
            <Text>List of something</Text>
            {/* Your list component goes here */}
        </View>
    );
};

const LeaderboardScreen = () => {
    return (
        <View>
            <Text>Leaderboard Tab</Text>
            {/* Your leaderboard component goes here */}
        </View>
    );
};

export default RestaurantScreen;
