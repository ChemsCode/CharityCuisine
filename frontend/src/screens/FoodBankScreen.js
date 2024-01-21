
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapComponent from '../components/foodbanks/MapComponent';

const Tab = createBottomTabNavigator();

const FoodBankScreen = () => {

  return (
      <Tab.Navigator>
        <Tab.Screen name="List" component={ListScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Map" component={MapComponent} />
      </Tab.Navigator>
  );
}


const ListScreen = () => {
    return (
        <View>
            <Text>List of something</Text>
            {/* Your list component goes here */}
        </View>
    );
};

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