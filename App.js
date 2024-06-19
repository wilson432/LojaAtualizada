
import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import Details from './Screens/Details';



export default function App() {

  const Stack = createStackNavigator();

  return (

      <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerStyle:{
          backgroundColor:'#000000'
      
        },
        headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#FFFFFF', 
          },
       }}
      >
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name ='Details' component={Details}></Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>
    );
}