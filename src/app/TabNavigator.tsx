import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import Home from '../features/Home/container';
import FavoritesPokemons from '../features/Favorites/container';
import Settings from '../features/Settings/container';

const TabNavigator = () => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarHideOnKeyboard: true
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesPokemons}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="heart-sharp" color={color} />,
        }}
      />
      <Tab.Screen
       name="Settings"
       component={Settings}
       options={{
         tabBarLabel: 'Settings',
         tabBarIcon: ({ color }) => <Ionicons size={28} name="settings" color={color} />,
        }}  
     />
    </Tab.Navigator>
  );
}
export default TabNavigator;

