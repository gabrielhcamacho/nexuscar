import React from 'react';
import Logo from '../../assets/nexuslogo.svg'
import { RFValue } from 'react-native-responsive-fontsize'

import {
  Container,
} from './styles'

export function Header(){
  return (
    <Container>
        <Logo width={RFValue(108)} height={RFValue(12)}/>
    </Container>
  );
}