import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const MapComponent = () => {
    const [region, setRegion] = useState({
        latitude: 45.508888,
        longitude: -73.561668,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const markers = [
        {
            latlng: { latitude: 45.508888, longitude: -73.561668 },
            title: 'Green Delight',
            description: 'Organic food made easy.',
        },
        {
            latlng: { latitude: 45.50, longitude: -73.58 },
            title: 'Noodles and Company',
            description: 'We sell noodles',
        },
        {
            latlng: { latitude: 45.49, longitude: -73.59 },
            title: 'Canned Cuisine',
            description: 'Want cans? We got em.',
        },
    ];

    const onRegionChange = (newRegion) => {
        console.log(newRegion);
    };

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={StyleSheet.absoluteFill}
                provider={PROVIDER_GOOGLE}
                initialRegion={region}
                region={region} 
                showsUserLocation
                showsMyLocationButton
                onRegionChangeComplete={onRegionChange}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
            </MapView>
        </View>
    );
};

export default MapComponent;
