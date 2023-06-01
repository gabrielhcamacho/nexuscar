import React from 'react';
import { StatusBar } from 'react-native'
import { CarCard } from '../../components/CarCard';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  SearchBarContainer,
  SearchInput
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
  const carData2 = {
    brand: 'toyota',
    name: 'Sulplar',
    info: {
      placa: 'AZY-4355',
      price: 350000,
    },
    image: 'https://blog.toyotasulpar.com.br/wp-content/uploads/2022/12/dicas-comprar-toyota-novo-curitiba.jpg'
  }


  return (
    <Container>
      <StatusBar barStyle={'dark-content'} backgroundColor="transparent" translucent />
      <SearchBarContainer>
        <AntDesign name="search1" size={24} color="black" />
        <SearchInput />
      </SearchBarContainer>
      <CarCard data={carData} />
      <CarCard data={carData2} />
    </Container>
  );
}
