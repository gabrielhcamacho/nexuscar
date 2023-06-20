import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home'
import { Splash } from '../screens/Splash'
import { CarList } from '../screens/CarList'
import { CarDetails } from '../screens/CarDetails'
import { VendaConfirmada } from '../screens/VendaConfirmada'
import { AddCar } from '../screens/AddCar'
import { ConfirmSale } from '../screens/ConfirmSale';

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes(){
    return(
        <Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
            <Screen
                name="Splash"
                component={Splash}
            />
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="CarList"
                component={CarList}
            />
             <Screen
                name="AddCar"
                component={AddCar}
            />
            <Screen
                name="CarDetails"
                component={CarDetails}
            />
            <Screen
                name="ConfirmSale"
                component={ConfirmSale}
            />
            <Screen
                name="VendaConfirmada"
                component={VendaConfirmada}
            />
        </Navigator>
    )
}