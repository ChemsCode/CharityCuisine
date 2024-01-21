import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { View } from "react-native";
import Button from "../general/Button";
import { StyleSheet } from "react-native";

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

    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                type={type}
                flashMode={flash}
                ref={cameraRef}
            >
                <Button title={'Take a picture'} icon={'camera'}/>

            </Camera>
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