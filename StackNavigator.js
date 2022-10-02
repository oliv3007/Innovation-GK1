import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LogInForm from './LoginForm';
import SignUpForm from './SignUpForm';

//Opretter Stck constanten
const Stack = createStackNavigator();

//Opretter MyStack funktionen
export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LogInForm} />
      <Stack.Screen name="Register" component={SignUpForm} />
    </Stack.Navigator>
  );
}