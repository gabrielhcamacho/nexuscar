import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home'
import { Splash } from '../screens/Splash'
import { CarList } from '../screens/CarList'
import { CarDetails } from '../screens/CarDetails'
import { Confirmacao } from '../screens/Confirmacao'
import { AddCar } from '../screens/AddCar'
import { ConfirmSale } from '../screens/ConfirmSale';
import { SignIn } from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/SignUp/FirstStep';
import { SignUpSecondStep } from '../screens/SignUp/SecondStep';

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes(){
    return(
        <Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="SignUpFirstStep"
                component={SignUpFirstStep}
            />
            <Screen
                name="SignUpSecondStep"
                component={SignUpSecondStep}
            />
            <Screen
                name="Home"
                component={Home}
                options={{
                    gestureEnabled: false,
                }}
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
                name="Confirmacao"
                component={Confirmacao}
            />
        </Navigator>
    )
}