import React, { useEffect } from 'react';
import { StatusBar } from 'react-native'
import { CarCard } from '../../components/CarCard';
import { Header } from '../../components/Header';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


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

  const navigation = useNavigation()

  function handleCarrosDisponiveis(){
    navigation.navigate('CarList')
  }


  return (
    <Container>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
      <Header />

      <DashboardContainer>
        
        <DashCard onPress={handleCarrosDisponiveis}>
          <Top>
            <Venda>carros a venda</Venda>
            <AntDesign name="arrowright" size={24} color="#aeaeb3" />
          </Top>
          <CarrosTotal>35</CarrosTotal>

          <SeeMoreButton onPress={handleCarrosDisponiveis}>
            <Txt>Ver todos</Txt>
          </SeeMoreButton>
        </DashCard>

      </DashboardContainer>

    </Container>
  );
}
