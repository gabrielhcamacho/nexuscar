import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components'
import { BorderlessButtonProps } from 'react-native-gesture-handler'

import {
    Container,
    BackToPage,
} from './styles'
import { useNavigation } from '@react-navigation/native';

interface Props extends BorderlessButtonProps{
    color?: string;
    pageName: string;
}

export function BackButton({color, pageName, ...rest}: Props) {

    const navigation = useNavigation()

    function handleBack(){
        navigation.goBack()
    }

    const theme = useTheme()
    return (
        <Container onPress={handleBack}>
            <Ionicons name="ios-chevron-back" size={28} color={color ? color : theme.colors.header} />
            <BackToPage>{pageName}</BackToPage>
        </Container>
    );
}