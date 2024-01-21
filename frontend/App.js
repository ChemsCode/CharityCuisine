import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ApiManager from './src/ApiManager/ApiManager'
// environment variables
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import FoodBankScreen from "./src/screens/FoodBankScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import SelectedRestaurantsScreen from './src/screens/SelectedRestaurantsScreen';

const Stack = createStackNavigator();

export default function App() {

  const ping_hello_world = async () => {

    try {
      let response = await ApiManager.helloWorld();
      console.log(response);
    } catch (error) {
      console.error("Error: ", error);
    }

  };

  // // call hello world endpoint
  // useEffect(() => {
  //   ping_hello_world();
  //   }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff', // White background
            elevation: 0, // Removes shadow on Android
            shadowOpacity: 0, // Removes shadow on iOS
            borderBottomWidth: 0, // Removes bottom border line
          },
          headerTintColor: '#333', // Dark color for the header text and icons
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center', // Center align the header title
          headerBackTitleVisible: false, // Hide back button text (iOS specific)
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FoodBankScreen" component={FoodBankScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
        <Stack.Screen name="SelectedRestaurants" component={SelectedRestaurantsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
