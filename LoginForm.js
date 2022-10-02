import React, { useState } from 'react';
import {
    Button,
    Text,
    View,
    TextInput,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";



function LoginForm() {

    //Statevariabler, der benyttes i LoginForm
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isCompleted, setCompleted] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

  
   //Opretter den metode, der håndterer login ved hjælp af firebase
    const handleSubmit = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
            });

        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    //Opretter loginknappen, der aktiverer handleSubmit 
    const renderButton = () => {
        return <Button onPress={() => handleSubmit()} title="Login" />;
    };


    //Opretter den return, hvor loginformen skrives i.
    return (
        <View style={styles.color}>
            <Text style={styles.header}>Login</Text>
            <TextInput
                placeholder="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry
                style={styles.inputField}
            />
            {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {renderButton()}
        </View>
    );


}

//Lokal styling 
const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
    },
    header: {
        fontSize: 40,
    },
});

export default LoginForm