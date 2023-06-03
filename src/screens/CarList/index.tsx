import React from 'react';
import { StatusBar } from 'react-native'
import { CarCard } from '../../components/CarCard';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  SearchBarContainer,
  SearchInput,
  Header,
  Left,
  BackToPage,
  CarFlatList
} from './styles'

export function CarList() {

  const carData = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    info: {
      placa: 'AZY-4355',
      price: 350.000,
    },
    image: 'https://2.bp.blogspot.com/-y4n8sHWryNg/WMBLnqBrYBI/AAAAAAACCfE/75AXU0D-gToh-FU_4X-qGdG0EprvEKQUgCLcB/s1600/A171788_medium.jpg'
  }


  return (
    <Container>

      <Header>
        <Left>
          <Ionicons name="ios-chevron-back" size={28} color="black" />
          <BackToPage>Dashboard</BackToPage>
        </Left>
        <Ionicons name="ios-add" size={30} color="black" />
      </Header>

      <StatusBar barStyle={'dark-content'} backgroundColor="transparent" translucent />
      <SearchBarContainer>
        <AntDesign name="search1" size={24} color="black" />
        <SearchInput />
      </SearchBarContainer>

      <CarFlatList
        data={[1,2,3,4,5,6,7,8]}
        keyExtractor={item => String(item)}
        renderItem={({item}) => <CarCard data={carData} />}
      />
      
    </Container>
  );
}
