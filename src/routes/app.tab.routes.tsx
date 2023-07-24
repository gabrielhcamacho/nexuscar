import React from 'react';
import { useTheme } from 'styled-components'
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppStackRoutes} from './app.stack.routes'
import { Home } from '../screens/Home'
import { AddCar } from '../screens/AddCar'
import { Platform } from 'react-native';
import { Profile } from '../screens/Profile';
import { Leilao } from '../screens/Leilao';

const { Navigator, Screen } = createBottomTabNavigator()


export function AppTabRoutes(){
    const theme = useTheme()

    return(
        <Navigator 
        screenOptions={{ headerShown: false }}
        tabBarOptions={{
            activeTintColor: theme.colors.red,
            inactiveTintColor: theme.colors.text_detail,
            showLabel: false,
            style: {
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                height: 78,
                backgroundColor: theme.colors.background_primary
            }
        }}
        >
            <Screen
                name="Home"
                component={AppStackRoutes}
                options={{
                    tabBarIcon: (({ color }) => (
                        <Ionicons name="home-outline" size={24} color={color} />
                    ))
                }}
            />
            <Screen
                name="Leilao"
                component={Leilao}
                options={{
                    tabBarIcon: (({ color }) => (
                        <Ionicons name="megaphone-outline" size={24} color={color} />
                    ))
                }}
            />
            <Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: (({ color }) => (
                        <Ionicons name="person-outline" size={24} color={color} />
                    ))
                }}
            />
        </Navigator>
    )
}