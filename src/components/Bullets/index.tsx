import React from 'react';

import {
  Container,
} from './styles'

interface BulletsProps{
    active?: boolean;
}

export function Bullets({active = false}: BulletsProps){
  return (
    <Container active={active}/>
  );
}