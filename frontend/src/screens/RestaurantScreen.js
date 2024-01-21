import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import CameraComponent from '../components/restaurants/CameraComponent';
import LeaderboardComponent from '../components/foodbanks/LeaderboardComponent';
import ApiManager from '../ApiManager/ApiManager';
import { StatusBar } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const RestaurantScreen = () => {    
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'List') {
                        iconName = 'restaurant-menu'; // Example icon for List
                    } else if (route.name === 'Camera') {
                        iconName = 'camera-alt'; // Example icon for Camera
                    } else if (route.name === 'Leaderboard') {
                        iconName = 'leaderboard'; // Example icon for Leaderboard
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
            <Tab.Screen name="List" component={ListScreen} />
            <Tab.Screen name="Camera" component={CameraComponent} />
            <Tab.Screen name="Leaderboard" component={LeaderboardComponent} />
        </Tab.Navigator>
    );
};

const ListScreen = () => {
    const [foodbanks, setFoodbanks] = useState(null);

    useEffect(() => {
        ApiManager.allFoodBanks()
            .then((res) => {
                setFoodbanks(res[1]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
            marginLeft: 0,
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
    });

    return (
        <View style={styles.container}>
            {foodbanks && (
                foodbanks.map((foodbank) => (
                    <View style={styles.itemContainer} key={foodbank.id}>
                        <TouchableHighlight style={styles.itemTouchable} onPress={() => {}}>
                            <View style={styles.item}>
                                <View>
                                    <Text style={styles.itemTitle}>{foodbank.name}</Text>
                                    <Text style={styles.itemContent}>{foodbank.location}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                ))
            )}
        </View>
    );
}

export default RestaurantScreen;
