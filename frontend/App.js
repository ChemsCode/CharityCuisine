import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapComponent from './src/components/foodbanks/MapComponent';
import ApiManager from './src/ApiManager/ApiManager'
// environment variables
import { API_URL } from '@env';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  const [helloWorld, setHelloWorld] = useState('');

  // const ping_hello_world = async () => {
  //   await axios.get(API_URL + '/hello')
  //     .then(res => {
  //       const data = res.data;
  //       setHelloWorld(data);
  //     })
  //     .catch(err => {
  //       console.log("Error: ", err);
  //       console.log(API_URL);
  //     });

  // };

  const ping_hello_world = async () => {

    try {
      let response = await ApiManager.helloWorld();
      console.log(response);
    } catch (error) {
      console.error("Error: ", error);
    }

  };

  // call hello world endpoint
  useEffect(() => {
    ping_hello_world();
    }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Map" component={MapComponent} />
      </Tab.Navigator>
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