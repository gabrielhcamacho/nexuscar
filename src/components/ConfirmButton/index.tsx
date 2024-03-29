import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../../styles/theme';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title,
} from './styles'

interface Props extends RectButtonProps{
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export function ConfirmButton({ 
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false,
}: Props) {

  return (
    <Container
      color={color ? color : theme.colors.red}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: (enabled === false) ? .5 : 1 }}
    >
      {
        loading
          ? <ActivityIndicator color={theme.colors.shape} />
          : <Title light={light}>{title}</Title>
      }
    </Container>
  );
}