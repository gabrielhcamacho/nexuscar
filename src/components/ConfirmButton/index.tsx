import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../../styles/theme';

import {
  Container,
  Title,
} from './styles'

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
  light?: boolean;
}

export function ConfirmButton({ title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false
  }: Props) {
  return (
    <Container 
    color={color} 
    enabled={false}
    onPress={onPress}
    enabled={enabled}
    //style={{ opacity: (enabled === false || enabled === true)}}
    >
      {
        loading
        ? <ActivityIndicator color={theme.colors.shape}/>
        : <Title light={light}>{title}</Title>
      }
    </Container>
  );
}