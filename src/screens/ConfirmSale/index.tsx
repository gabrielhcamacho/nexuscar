import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { BackButton } from '../../components/BackButton';

import {
    Container,
    Header,
    Footer
} from './styles'
import { ConfirmButton } from '../../components/ConfirmButton';


export function ConfirmSale() {

    const navigation = useNavigation()

    function handleVender() {
        navigation.navigate('VendaConfirmada')
    }


    return (
        <Container>
            <Header>
                <BackButton pageName='Carro' />
            </Header>

            <Footer>
                <ConfirmButton title='confirmar venda' color='green' onPress={() => handleVender()} />
            </Footer>
        </Container>
    );
}