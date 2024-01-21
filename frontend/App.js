import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ApiManager from './src/ApiManager/ApiManager'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import FoodBankScreen from "./src/screens/FoodBankScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";

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
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FoodBankScreen" component={FoodBankScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%'
  }
});
``