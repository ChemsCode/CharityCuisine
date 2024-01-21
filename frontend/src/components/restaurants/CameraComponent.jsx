import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { View } from "react-native";
import { StyleSheet, Text, Image, TouchableOpacity, FlatList } from "react-native";
import ApiManager from "./../../ApiManager/ApiManager";
import { API_URL } from '@env';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

export default CameraComponent = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const [items, setItems] = useState(null);
    const [restaurantList, setRestaurantList] = useState(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const cameraRef = React.useRef(null);

    useEffect(() => {
        (async () => {
            try {
                const { status } = await MediaLibrary.requestPermissionsAsync();
                const cameraStatus = await Camera.requestCameraPermissionsAsync();
                setHasPermission(cameraStatus.status === "granted");
                const response = await ApiManager.allRestaurants();
                // console.log('allRestaurants response[1]: ', response[1]);
                const restaurantList = response[1]?.map((restaurant) => {
                    return {
                        label: restaurant.name,
                        value: restaurant.restaurant_id
                    }
                });
                console.log('restaurantList: ', restaurantList);
                setRestaurantList(restaurantList);

            } catch (error) {
                console.log("error on mount", error);
            }


        })();
    }, []);

    useEffect(() => {
        if (items) {
            console.log('Items found', items);
        }
    }, [items]);

    const uploadImage = async (formData) => {
        console.log('Uploading image');
        try {
            const response = await fetch(`${API_URL}/models/upload`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const responseJson = await response.json();
            console.log('Upload successful', responseJson);
            setItems(responseJson);
        } catch (error) {
            console.log('Error uploading image', error);
        }
    };


    const takePicture = async () => {
        if (cameraRef) {
            try {
                // Take picture and get data
                const data = await cameraRef.current.takePictureAsync();
                // Save image to state and prepare FormData for sending
                setImage(data.uri);
            } catch (error) {
                console.log("Error taking picture", error);
            }
        }
    };


    const sendImage = async () => {
        if (image) {
            try {
                const formData = new FormData();
                formData.append('image', {
                    uri: image,
                    type: 'image/jpeg', // or the correct type of your image
                    name: 'image.jpg',
                });

                // Send image to server
                uploadImage(formData);
            } catch (error) {
                console.log("Error sending picture", error);
            }
        }
    };

    // Convert the state object to an array format for FlatList
    const dataForList = Object.keys(items ?? {}).map((key, index) => ({
        id: index.toString(),
        item: key,
        value: items[key]
    }));

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.itemText}>{item.item}: {item.value}</Text>
        </View>
    );

    if (hasPermission === null) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            {image ? (
                <>
                    {items ? (
                        <View style={{ flex: 1 }}>
                            <RNPickerSelect
                                onValueChange={(value) => setSelectedRestaurant(value)}
                                items={restaurantList ?? []}
                                style={pickerSelectStyles}
                                placeholder={{ label: "Select an item...", value: null }}
                            />

                            <FlatList
                                data={dataForList ?? []}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                            />

                            <TouchableOpacity style={styles.confirmButton} onPress={() => {setItems(null); setImage(null);}}>
                                <Text style={styles.confirmButtonText}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    ) :
                        (
                            <>
                                <Image source={{ uri: image }} style={styles.preview} />
                                <View style={styles.overlayButtonContainer}>
                                    <TouchableOpacity style={styles.button} onPress={() => { setImage(null) }}>
                                        <MaterialIcons name="restart-alt" size={28} color="#fff" />
                                        <Text style={styles.buttonText}>Retake</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button} onPress={sendImage}>
                                        <FontAwesome name="send" size={28} color="#fff" />
                                        <Text style={styles.buttonText}>Send</Text>
                                    </TouchableOpacity>
                                </View>
                            </>)}
                </>
            ) : (
                <Camera style={styles.camera} type={type} flashMode={flash} ref={cameraRef}>
                    <View style={styles.cameraButtonContainer}>
                        <TouchableOpacity style={styles.cameraButton} onPress={takePicture}>
                            <FontAwesome name="camera" size={32} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </Camera>
            )}
        </View>
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#000',
        paddingBottom: 20,
    },
    cameraButtonContainer: {
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: '#4a4a4a',
    },
    cameraButton: {
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#4a4a4a',
    },
    buttonText: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 18,
    },
    infoText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
    },
    overlayButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute', // Position the container absolutely
        bottom: 20, // Distance from the bottom
        left: 0,
        right: 0,
    },
    card: {
        padding: 20, // Increased padding for larger cards
        margin: 15, // Increased margin for spacing
        backgroundColor: '#f9f9f9',
        borderRadius: 8, // Slightly larger radius for aesthetics
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4
    },
    itemText: {
        fontSize: 20, // Larger font size for better readability
        color: '#333',
        textAlign: 'center', // Centering the text
    },
    confirmButton: {
        backgroundColor: '#4CAF50', // Green background color
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#2E7D32', // Darker shade of green for shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
    },
    confirmButtonText: {
        color: '#FFFFFF', // White text color
        fontSize: 18,
        fontWeight: 'bold',
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});