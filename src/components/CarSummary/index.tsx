import React from 'react';
import { SvgProps } from 'react-native-svg';

import {
  Container,
  Name,
  Icon,
  Description,
} from './styles'

interface Props{
    name: string;
    icon: string;
    description: string
}

export function CarSummary({name, icon, description}: Props){
  return (
    <Container>
        <Icon name={icon}/>
        <Name>{name}</Name>
        <Description>{description}</Description>
    </Container>
  );
}