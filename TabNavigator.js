import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from './ProfileScreen';
import LocationScreen from './ProfileComponents/LocationScreen';
import ProductScreen from './ProfileComponents/ProductScreen';

const Tab = createBottomTabNavigator();

//Opretter den tabnavigator, der bruges til at navigere, når man er logget ind
export default function ProfileTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Location" component={LocationScreen} />
        <Tab.Screen name="Products" component={ProductScreen} />
      </Tab.Navigator>
    );
  };