import React from 'react';

import {
  Container,
  Title,
} from './styles'

interface Props{
    title: string;
    color?: string;
    // onPress: () => void;
}

export function ConfirmButton({title, color, ...rest}: Props){
  return (
    <Container {...rest} color={color} enabled={false}>
        <Title>{title}</Title>
    </Container>
  );
}