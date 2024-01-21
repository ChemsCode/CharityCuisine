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
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
        alignSelf: 'center',
        textTransform: 'uppercase'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    starRatingContainer: {
        flexDirection: 'row'
    },
    star: {
        color: '#ffd700',
        fontSize: 22, // Larger star icons
    },
    badge: {
        borderRadius: 16,
        paddingVertical: 10,
        paddingHorizontal: 35,
        backgroundColor: '#4a90e2', // Changed to a more vivid color
    },
    badgeText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16, // Increased font size
    },
    subHeader: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center',
        color: '#333'
    },
    listItem: {
        backgroundColor: '#fff',
        padding: 25, // Even more padding for a larger card
        marginVertical: 8,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: '#333', // Darker text color
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
