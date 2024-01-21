
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapComponent from '../components/foodbanks/MapComponent';
import RestaurantListComponent from '../components/foodbanks/RestaurantListComponent';
import CheckoutComponent from '../components/foodbanks/CheckoutComponent';

const Tab = createBottomTabNavigator();

const FoodBankScreen = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="List" component={RestaurantListComponent} />
        <Tab.Screen name="Map" component={MapComponent} />
        <Tab.Screen name="Checkout" component={CheckoutComponent} />
      </Tab.Navigator>
  );
}

const SettingsScreen = () => {
    return (
        <View>
            <Text>Settings Tab</Text>
            {/* Your camera component goes here */}
        </View>
    );
};


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


export default FoodBankScreen;