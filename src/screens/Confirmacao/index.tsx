import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

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
import { useNavigation, useRoute } from '@react-navigation/native';

type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };

interface Params{
    title: string,
    message: string,
    nextScreenRoute: string
}


export function Confirmacao() {

    const { width } = useWindowDimensions()

    const navigation = useNavigation()
    const route = useRoute()
    const { title, message, nextScreenRoute } = route.params as Params


    function handleConfirmacao() {
        navigation.navigate(nextScreenRoute as never)
    }

    return (
        <Container>
            <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>{title}</Title>

                <Message>
                    {message}
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