import React, { useState, useEffect, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../../screens/login'
import Charachters from '../../screens/characters'
import Details from '../../screens/details'
import FavList from '../../screens/favList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../context';

const Stack = createNativeStackNavigator();

const Routes = (props) => {
    const { isLogged } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    isLogged ?
                        <>
                            <Stack.Screen name='Charachters' component={Charachters}></Stack.Screen>
                            <Stack.Screen name='Details' component={Details}></Stack.Screen>
                            <Stack.Screen name='Favorite List' component={FavList}></Stack.Screen>
                            
                        </>   
                    : 
                        <Stack.Screen name='Login' component={Login}></Stack.Screen>           
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;