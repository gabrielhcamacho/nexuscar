import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native'
import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import {
    Container,
    Content,
    Title,
    Message,
    OkButton,
    ButtonText,
    Footer
} from './styles'
import { useNavigation } from '@react-navigation/native';

export function VendaConfirmada() {

    const { width } = useWindowDimensions()
    const navigation = useNavigation()

    function handleConfirmacao() {
        navigation.navigate('Home')
    }

    return (
        <Container>
            <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Venda Realizada</Title>

                <Message>
                    Você pode ver o historico das vendas {'\n'}
                    no menu do dashboard inicial
                </Message>
            </Content>

            <Footer>
                <OkButton onPress={handleConfirmacao}>
                    <ButtonText>OK</ButtonText>
                </OkButton>
            </Footer>
        </Container>
    );
}