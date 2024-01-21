import React, { useState, useEffect } from 'react';
import { View, Alert, Text, Pressable, Image, TouchableOpacity, FlatList, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { FAB } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import ApiManager from "./../../ApiManager/ApiManager";


const ExpandableListItem = ({ item, onSelect, isPickedUp }) => {
  const [expanded, setExpanded] = useState(false);

  const images = {
    1: require('../../../assets/restaurant1.jpg'),
    2: require('../../../assets/restaurant2.jpg'),
    3: require('../../../assets/restaurant3.jpg'),
    4: require('../../../assets/restaurant4.jpg'),
    5: require('../../../assets/restaurant5.jpg'),
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handlePickup = () => {
    onSelect(item.restaurant_id);
    Alert.alert('Item reserved!');
  };

  const cancelPickup = () => {
    if (isPickedUp) {
      // Remove the item from the pickup list
      onSelect(item.restaurant_id);
      Alert.alert('Item canceled.');
    }
  };

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={toggleExpand}
        style={styles.itemTouchable}
      >
        <View style={styles.item}>
          <View>
            <Text style={styles.itemTitle}>
              {item.name}
            </Text>
            <Text style={styles.itemDesc}>
              Ready for pickup
            </Text>
          </View>
          <Image source={images[item.id]} style={styles.img} />
        </View>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.itemContent}>
            <Text style={styles.textContent}>
                {item.opening_hour} - {item.closing_hour}
            </Text>
          <Text style={styles.textContent}>
            {item.location}
          </Text>
          <View style={styles.buttonsContainer}>
            <Pressable
                style={[styles.cancelButton, !isPickedUp && styles.disabledButton]}
                onPress={cancelPickup}
                disabled={!isPickedUp}
            >
                <Text style={styles.buttonText}> Cancel </Text>
            </Pressable>
            <Pressable
                style={[styles.button, isPickedUp && styles.disabledButton]}
                onPress={handlePickup}
                disabled={isPickedUp}
            >
                <Text style={styles.buttonText}> Reserve </Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

const RestaurantListComponent = () => {
  const [selectedItemIds, setSelectedItemIds] = useState([]);
  const [selectedItemNames, setSelectedItemNames] = useState([]);
  const [visible, setVisible] = React.useState(true);
  const navigation = useNavigation();
  const [restaurants, setRestaurants] = useState(null);


  useEffect(() => {
    ApiManager.allRestaurants().then((response) => {
      setRestaurants(response[1]);
      console.log(restaurants);
    });
  }, []);

  const handleSelect = (itemId) => {
    // Check if the item is already in the pickup list
    if (selectedItemIds.includes(itemId)) {
      // Remove the item from the pickup list
      setSelectedItemIds((prevIds) => prevIds.filter((id) => id !== itemId));
    } else {
      // Add the item to the pickup list
      setSelectedItemIds((prevIds) => [...prevIds, itemId]);
      setSelectedItemNames((prevNames) => [...prevNames, restaurants.find((item) => item.restaurant_id === itemId).name]);
    }
  };

  useEffect(() => {
    setVisible(selectedItemIds.length > 0);
  }, [selectedItemIds]);

  const navigateToSelectedItems = () => {
    navigation.navigate('SelectedRestaurants', { selectedIds: selectedItemIds, selectedNames: selectedItemNames });
  };

  const isPickedUp = (itemId) => selectedItemIds.includes(itemId);

  const renderExtendedRestaurant = ({ item }) => (
    <ExpandableListItem item={item} onSelect={handleSelect} isPickedUp={isPickedUp(item.restaurant_id)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {restaurants && (
      <FlatList
        ItemSeparatorComponent={
          <View
            style={[styles.separator]}
          />
        }
        data={restaurants}
        renderItem={renderExtendedRestaurant}
        keyExtractor={(item) => item.restaurant_id.toString()}
      />
      )}
      <FAB
        visible={visible}
        icon={{ name: 'shopping-cart', color: 'white' }}
        color="green"
        style={styles.fab}
        onPress={navigateToSelectedItems}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
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
    itemDesc: {
        fontSize: 14,
        color: "green",
        marginTop: 5,
        fontStyle: "italic",
    },
    textContent: {
        fontSize: 18,
        color: "#666",
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
    cancelButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: '#bfbfbf',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
    },
    fab: {
        width: 60,  
        height: 60,   
        borderRadius: 30,                                           
        position: 'absolute',                                          
        bottom: 10,                                                    
        right: 10, 
    }
});

export default RestaurantListComponent;
