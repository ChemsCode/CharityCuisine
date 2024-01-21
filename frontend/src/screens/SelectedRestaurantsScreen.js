import React from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import ApiManager from '../ApiManager/ApiManager';

const SelectedRestaurantsScreen = ({ route }) => {
  const { selectedIds } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Confirm Pickup
        </Text>
        <View style={styles.separator}/>
      {selectedIds.map((id) => (
        <Text key={id}>{id}</Text>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: 'white'
    }, 
    title: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 10,
        fontSize: 28,
        fontWeight: 'bold',
    }, 
    separator: {
        height: 1,
        backgroundColor: '#dddddd',
    },
});

export default SelectedRestaurantsScreen;