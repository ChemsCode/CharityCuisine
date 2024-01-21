import React, { useState } from 'react';
import { View, Alert, Text, Pressable, Image, TouchableOpacity, FlatList, SafeAreaView, StyleSheet, StatusBar } from 'react-native';


const ExpandableListItem = ({ item }) => {
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
                        {item.content}
                    </Text>
                    <Pressable
                        style={styles.button}
                        onPress={() => Alert.alert('Simple Button pressed')}
                    >
                        <Text style={styles.buttonText}> Pickup </Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
};


const RestaurantListComponent = () => {
    const restaurants = [
        { id: 1, name: 'Green Delight', content: "Organic food made easy." },
        { id: 2, name: 'Noodles and Company', content: "We sell noodles" },
        { id: 3, name: 'Canned Cuisine', content: "Want cans? We got em." },
    ];

    const renderRestaurant = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Image source={images[item.id]} style={styles.img} />
        </View>
    );

    const renderExtendedRestaurant = ({ item }) => (
        <ExpandableListItem item={item} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ItemSeparatorComponent={
                    <View
                        style={[styles.separator]}
                    />
                }
                data={restaurants}
                renderItem={renderExtendedRestaurant}
                keyExtractor={(item) => item.id.toString()}
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
        flexDirection: "row",
        justifyContent: "space-between",
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
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        margin: 5,
      },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },

});

export default RestaurantListComponent;
