import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { View } from "react-native";
import Button from "../general/Button";
import { StyleSheet, Text, Image } from "react-native";
import ApiManager from "./../../ApiManager/ApiManager";
import { API_URL } from '@env';

export default CameraComponent = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = React.useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasPermission(cameraStatus.status === "granted");
        })();
    }, []);

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

    if (hasPermission === null) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            {
                !image ?
                    <Camera
                        style={styles.camera}
                        type={type}
                        flashMode={flash}
                        ref={cameraRef}
                    >

                    </Camera>
                    :

                    <Image source={{ uri: image }} style={styles.camera} />

            }

            {
                image ?
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 50,
                    }}>
                        <Button title={'Re-take'} icon={'retweet'} onPress={() => setImage(null)} />
                        <Button title={'Send'} icon={'check'} onPress={sendImage} />
                    </View>
                    :

                    <Button title={'Take a picture'} icon={'camera'} onPress={takePicture} />


            }

        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    camera: {
        flex: 1,
        borderRadius: 20,
    },
});