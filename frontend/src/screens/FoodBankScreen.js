import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import MapComponent from '../components/foodbanks/MapComponent';
import RestaurantListComponent from '../components/foodbanks/RestaurantListComponent';
import CheckoutComponent from '../components/foodbanks/CheckoutComponent';
import AddComponent from '../components/foodbanks/AddFoodBank';

const Tab = createBottomTabNavigator();

const FoodBankScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'List') {
              iconName = 'list';
            } else if (route.name === 'Map') {
              iconName = 'map';
            } else if (route.name === 'Checkout') {
              iconName = 'shopping-cart';
            } else if (route.name === 'Add') {
              iconName = 'add';
            }

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
          <Tab.Screen name="List" component={RestaurantListComponent} />
          <Tab.Screen name="Map" component={MapComponent} />
          <Tab.Screen name="Checkout" component={CheckoutComponent} />
          <Tab.Screen name="Add" component={AddComponent} />
        </Tab.Navigator>
      </View>
    );
  }
  
  export default FoodBankScreen;