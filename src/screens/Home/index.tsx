import React from 'react';
import { StatusBar } from 'react-native'
import { CarCard } from '../../components/CarCard';
import { Header } from '../../components/Header';
import { AntDesign } from '@expo/vector-icons';


import {
  Container,
  DashCard,
  DashboardContainer,
  CarrosTotal,
  Top,
  Venda,
  SeeMoreButton,
  Txt
} from './styles'

export function Home() {
  return (
    <Container>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
      <Header />

      <DashboardContainer>
        <DashCard>
          <Top>
            <Venda>carros a venda</Venda>
            <AntDesign name="arrowright" size={24} color="#aeaeb3" />
          </Top>
          <CarrosTotal>35</CarrosTotal>

          <SeeMoreButton>
            <Txt>Ver todos</Txt>
          </SeeMoreButton>
        </DashCard>
      </DashboardContainer>

    </Container>
  );
}
