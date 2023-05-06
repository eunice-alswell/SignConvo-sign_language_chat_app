import React, {useState} from 'react';
import {StyleSheet, View,Text, TextInput,SafeAreaView,Image, Button, TouchableOpacity, StatusBar, Alert} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const BackImage = require('sign_client/assets/backImage.jpg');

export default function Login({navigation}) {
    // declare state variables for user input
    const [email, setEmail] = useState('');
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
        <View style={styles.container}>
            <Image source = {BackImage} style={styles.backImage} />
            <View style={styles.whiteSheet} />
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Enter email...'
                    autoCapitalize='none'
                    keyboardType = 'email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                    value={email}
                    onChangeText = {(text) => setEmail(text)}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Enter password...'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    value={password}
                    onChangeText = {(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={{color: '#fff', fontSize: 21,fontWeight: 'bold'}}>Login</Text>
                </TouchableOpacity>
                <View style = {{marginTop: 5, flexDirection: 'row', alignSelf: 'center',alignItems:'center'}}>
                    <Text style={{color: '#fff', fontSize: 16, paddingRight: 5}}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      color: "#fff",
      alignSelf: "center",
      paddingBottom: 24,
    },
    input: {
      backgroundColor: "#F6F7FB",
      height: 50,
      marginBottom: 20,
      fontSize: 16,
      borderRadius: 10,
      padding: 12,
      width: 300,
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
      height: '70%',
      position: "absolute",
      bottom: 0,
      backgroundColor: '#FFB319',
      borderTopLeftRadius: 60,
      borderTopRightRadius: 60,
    },
    form: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 30,
      position: 'absolute',
      // height: '70%',
      top: '30%',
      paddingTop: 50,
    },
    button: {
      backgroundColor: '#f57c00',
      height: 58,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
  })

