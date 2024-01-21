import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const StarRating = ({ rating }) => (
    <View style={styles.starRatingContainer}>
        {Array.from({ length: rating }, (_, index) => (
            <Text key={index} style={styles.star}>⭐</Text>
        ))}
    </View>
);

const Badge = ({ type }) => (
    <View style={[styles.badge, { backgroundColor: badgeColors[type] }]}>
        <Text style={styles.badgeText}>{type}</Text>
    </View>
);

const LeaderboardComponent = ({ restaurantName, starRating, badge }) => {
    const [completedOrders, setCompletedOrders] = useState([
        'Order 1', 'Order 2', 'Order 3', 'Order 4', 'Order 5', 'Order 6', 'Order 7', 'Order 8', 'Order 9', 'Order 10'
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{restaurantName}</Text>
            <View style={styles.row}>
                <StarRating rating={starRating} />
            </View>
            <View style={styles.row}>
                <Badge type={badge} />
            </View>
            <Text style={styles.subHeader}>Completed Orders</Text>
            <FlatList
                data={completedOrders}
                renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const badgeColors = {
    bronze: '#cd7f32',
    silver: '#c0c0c0',
    gold: '#ffd700'
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        justifyContent: 'center'
    },
    label: {
        fontWeight: 'bold'
    },
    starRatingContainer: {
        flexDirection: 'row'
    },
    star: {
        color: '#ffd700'
    },
    badge: {
        borderRadius: 12,
        paddingVertical: 7,
        paddingHorizontal: 30,
        marginLeft: 10
    },
    badgeText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    subHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
        alignSelf: 'center'
    },
    listItem: {
        backgroundColor: '#fff',
        padding: 20, // Increased padding for a bigger card
        marginTop: 10,
        borderRadius: 10, // Slightly larger radius for aesthetics
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center', // Center items vertically
        fontSize: 18, // Bigger font size for text
        textAlign: 'center', // Center text horizontally
    }
});

const randomRestaurantName = "Restaurant " + Math.floor(Math.random() * 1000);
const randomStarRating = Math.floor(Math.random() * 5) + 1;
const randomBadge = ['bronze', 'silver', 'gold'][Math.floor(Math.random() * 3)];

export default () => (
    <LeaderboardComponent
        restaurantName={randomRestaurantName}
        starRating={randomStarRating}
        badge={randomBadge}
    />
);
