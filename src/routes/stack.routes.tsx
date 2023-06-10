import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home'
import { CarList } from '../screens/CarList'
import { CarDetails } from '../screens/CarDetails'
import { VendaConfirmada } from '../screens/VendaConfirmada'

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="CarList"
                component={CarList}
            />
            <Screen
                name="CarDetails"
                component={CarDetails}
            />
            <Screen
                name="VendaConfirmada"
                component={VendaConfirmada}
            />
        </Navigator>
    )
}