import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
//import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";

function ProfileScreen() {

    //handleLogout håndterer log ud af en aktiv bruger.
    //Opretter handleLogOut til at håndtere log ud for aktiv bruger
    const handleLogOut = async () => {
        await firebase.auth().signOut();
    };

    //Printer besked, hvis der ikke fremfindes en aktiv bruger
    if (!firebase.auth().currentUser) {
        return <View><Text>Not found</Text></View>;
    }

    //opretter return, hvor man kan se hvem, der er logget ind og logud-knappen også befinder sig.
    return (
        <View style={styles.container} >
            <Text>Current user: {firebase.auth().currentUser.email}</Text>
            <Button onPress={() => handleLogOut()} title="Log out" />
        </View>


    );

}

//Lokal styling 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: '5%',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});


export default ProfileScreen