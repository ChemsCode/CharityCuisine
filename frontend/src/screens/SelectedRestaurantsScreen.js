import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, Pressable } from 'react-native';
import ApiManager from '../ApiManager/ApiManager';

const SelectedRestaurantsScreen = ({ route }) => {
  const { selectedIds, selectedNames } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Selected Restaurants</Text>
      <FlatList
        data={selectedNames.map((name, index) => ({ id: selectedIds[index], name }))}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text key={item.id}>{item.name}</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
          <Pressable
              style={styles.button}
              // onPress={handlePickup}
              // disabled={isPickedUp}
          >
              <Text style={styles.buttonText}> Reserve </Text>
          </Pressable>
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
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 14,
      borderRadius: 8,
      elevation: 3,
      backgroundColor: '#1b9ae3',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
    },
  buttonText: {
      fontSize: 16,
      letterSpacing: 0.25,
      color: 'white',
    },
  disabledButton: {
      backgroundColor: '#e6e6e6', 
  },
  buttonsContainer: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      marginRight: 20,
  },
  itemContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,
},
item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffff',
    padding: 20,
},
title: {
    fontSize: 24,
},
separator: {
    height: 1,
    backgroundColor: '#dddddd',
},
img: {
    width: 50,
    height: 50,
},
itemTouchable: {
    borderRadius: 10,
    overflow: "hidden",
},
itemTitle: {
    fontSize: 24,
    color: "#333",
    fontWeight: "bold",
},
itemContent: {
    marginBottom: 10,
    fontSize: 18,
    color: "#666",
    marginLeft: 20,
},
});

export default SelectedRestaurantsScreen;