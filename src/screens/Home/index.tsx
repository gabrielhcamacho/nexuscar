import React from 'react';
import { StatusBar } from 'react-native'
import { CarCard } from '../../components/CarCard';
import { Header } from '../../components/Header';



import {
  Container
} from './styles'

export function Home(){
  return (
    <Container>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent/>
       <Header/>
    </Container>
  );
}
