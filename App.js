import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";

import { NavigationContainer } from '@react-navigation/native';

//Importerer min Stack og Tab
import MyStack from './components/StackNavigator';
import ProfileTabs from './components/TabNavigator';



// Konfiguering til firebase. .
const firebaseConfig = {
  apiKey: "AIzaSyAp6NBs5tAveS_HSlVohRbcXT9_oabv5I4",
  authDomain: "godkendelsesopgave-1-33307.firebaseapp.com",
  projectId: "godkendelsesopgave-1-33307",
  storageBucket: "godkendelsesopgave-1-33307.appspot.com",
  messagingSenderId: "943274207517",
  appId: "1:943274207517:web:ec8e096680e1dec08799f4"
};


export default function App() {


  //Opretter bruger state variblen
  const [user, setUser] = useState({ loggedIn: false });



  //Sikrer at kun én Firebase initieres under brug af appen.
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }


  //Opretter function, der undersøger hvorvidt en bruger er logget ind eller ud på baggrund af status
  //Denne hører sammen med useEffect funktionen nednunder
  function onAuthStateChange(callback) {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback({ loggedIn: true, user: user });
      } else {
        callback({ loggedIn: false });
      }
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);



  //Her oprettes gæstekomponentsindhold, der består af den Stack, som vises, når man ikke er logget ind.
  const GuestPage = () => {
    return (

      <NavigationContainer>
        <MyStack />
      </NavigationContainer>

    );

  }
  //Her oprettes Profilsiden, der består af en tab med 3 sider, som vises når en bruger er logget ind. 
  const ProfilePage = () => {
    return (
      <NavigationContainer>
        <ProfileTabs />
      </NavigationContainer>
    )
  }

  return user.loggedIn ? <ProfilePage /> : <GuestPage />;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '5%',
    backgroundColor: 'transparent',
    padding: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});