import React from 'react';
import GasolineSvg from '../../assets/gasoline.svg'

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
  Header
} from './styles'


interface CarData{
  brand: string,
  name: string,
  info: {
    placa: string,
    price: number,
  }
  image: string
}

interface Props{
 data: CarData
}

export function CarCard( {data} : Props ) {
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Info>
            <Placa>{data.info.placa}</Placa>
            <Price>{`R$ ${data.info.price}`}</Price>
          </Info>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data.image }}/>
    </Container>
  );
}