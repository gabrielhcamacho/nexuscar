import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background_primary};
  width: 109px;
  height: 92px;

  justify-content: center;
  align-items: center;

  padding: 16px;
  margin-bottom: 8px;
`

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_500};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(13)}px;
`

export const Icon = styled(Ionicons)`
  font-size: 32px;
  color: ${({theme}) => theme.colors.title};
`

export const Description = styled.Text`

`
