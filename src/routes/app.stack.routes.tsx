import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home'
import { CarList } from '../screens/CarList'
import { CarDetails } from '../screens/CarDetails'
import { Confirmacao } from '../screens/Confirmacao'
import { AddCarFirstStep } from '../screens/AddCar/FirstStep'
import { AddCarSecondStep } from '../screens/AddCar/SecondStep'
import { ConfirmSale } from '../screens/ConfirmSale';


const { Navigator, Screen } = createNativeStackNavigator()

export function AppStackRoutes() {
    return (
        <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="CarList"
                component={CarList}
            />
            <Screen
                name="AddCarFirstStep"
                component={AddCarFirstStep}
            />
            <Screen
                name="AddCarSecondStep"
                component={AddCarSecondStep}
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
                name="Confirmacao"
                component={Confirmacao}
            />
        </Navigator>
    )
}