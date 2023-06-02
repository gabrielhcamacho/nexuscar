import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  Left,
  BackToPage,
} from './styles'

interface Props{
    leftIconName: string,
    rightIconName: string,
    leftSize: number,
    rightSize: number,
    backToPage: string
}

export function HeaderMenus({ leftIconName, leftSize, rightSize, rightIconName, backToPage } : Props){
  return (
    <Container>

        <Left>
          <Ionicons name={leftIconName} size={leftSize} color="black" />
          <BackToPage>{backToPage}</BackToPage>
        </Left>
        <Ionicons name={rightIconName} size={rightSize} color="black" />

    </Container>
  );
}