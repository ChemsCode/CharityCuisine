import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import MapComponent from '../components/foodbanks/MapComponent';
import RestaurantListComponent from '../components/foodbanks/RestaurantListComponent';
import CheckoutComponent from '../components/foodbanks/CheckoutComponent';

const Tab = createBottomTabNavigator();

const FoodBankScreen = () => {
  return (
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
        <Tab.Screen name="List" component={RestaurantListComponent} />
        <Tab.Screen name="Map" component={MapComponent} />
        <Tab.Screen name="Checkout" component={CheckoutComponent} />
      </Tab.Navigator>
  );
}

// ... rest of your code

export default FoodBankScreen;
