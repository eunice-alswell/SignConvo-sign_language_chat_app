import React, {useState} from 'react';
import {styleSheet, View,Text, TextInput,SafeAreaView,Image, Button, TouchableOpacity, StatusBar, Alert} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const BackImage = require('sign_client/assets/backImage.jpg');

export default function Login({navigation}) {
    // declare state variables for user input
    const [email, setEmai] = useState('');
    const [password, setPassword] = useState('');

    // function to handle user login
    const handleLogin = () => {
        if (email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
            .then(()=>console.log("Login successful"))
            .catch((error) => Alert.alert(error.message));
        }
    }

    return (
        <View style = {styles.container}>
            <image source = {BackImage} style = {styles.backImage} />
        </View>
    )
}

const styles = styleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "orange",
        alignSelf: "center",
        paddingBottom: 24,
    },
    input: {
        backgroundColor: "#F6F7FB",
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
    },
    backImage: {
        width: "100%",
        height: 340,
        position: "absolute",
        top: 0,
        resizeMode: 'cover',
    },
    whiteSheet: {
        width: '100%',
        height: '75%',
        position: "absolute",
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    button: {
        backgroundColor: '#f57c00',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
}
);