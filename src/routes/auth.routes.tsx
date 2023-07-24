import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash } from '../screens/Splash'
import { Confirmacao } from '../screens/Confirmacao'
import { SignIn } from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/SignUp/FirstStep';
import { SignUpSecondStep } from '../screens/SignUp/SecondStep';

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes(){
    return(
        <Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
            <Screen
                name="Splash"
                component={Splash}
            />
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
                name="Confirmacao"
                component={Confirmacao}
            />
        </Navigator>
    )
}