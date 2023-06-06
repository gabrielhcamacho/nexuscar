import React from 'react';
import { useWindowDimensions } from 'react-native'
import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import {
  Container,
  Content,
  Title,
  Message,
} from './styles'

export function VendaConfirmada(){

    const {width} = useWindowDimensions()

  return (
    <Container>
        <LogoSvg width={width}/>

        <Content>
            <DoneSvg width={80} height={80}/>
            <Title>Venda Realizada</Title>

            <Message>
                Você pode ver o historico das vendas {'\n'}
                no menu do dashboard inicial
            </Message>
        </Content>
    </Container>
  );
}