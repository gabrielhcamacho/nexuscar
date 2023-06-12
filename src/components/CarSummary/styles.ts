import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background_primary};
  width: 167px;
  height: 102px;

  justify-content: center;
  align-items: center;

  padding: 16px;
  margin-bottom: 8px;
`

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_500};
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(13)}px;
  margin-bottom: 2px;
  text-transform: uppercase;
`

export const Icon = styled(Ionicons)`
  font-size: 32px;
  color: ${({theme}) => theme.colors.title};
  margin-bottom: 2px;
`

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.text};
`
