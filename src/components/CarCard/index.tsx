import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import GasolineSvg from '../../assets/gasoline.svg'
import { CarDTO } from '../../dtos/CarDTO'


import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Placa,
  Price,
  Type,
  CarImage,
  Info,
  InterestedIcon,
} from './styles'

// interface CarData{
//   brand: string,
//   name: string,
//   info: {
//     placa: string,
//     price: number,
//   }
//   image: string
// }

// interface Props{
//  data: CarData
// }

interface Props{
  data: CarDTO;
  carData: CarDTO;
}


export function CarCard({ data, carData }: Props) {
   
  const navigation = useNavigation()
  
  function handleCarDetails(item: CarDTO) {
    navigation.navigate('CarDetails', { item: item })
  }

  console.log(data)
  
  return (
    <Container onPress={() => handleCarDetails(carData)}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Info>
            <Placa>{data.placa}</Placa>
            <Price>{`R$ ${data.valorCompra}`}</Price>
          </Info>

          <Type>
            { data.interestedPerson?  <InterestedIcon name='ios-person-add-outline'/> : <></>}
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain"/>
    </Container>
  );
}