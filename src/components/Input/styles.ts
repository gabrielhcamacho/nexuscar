import { RFValue } from 'react-native-responsive-fontsize'
import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.Text`
  flex-direction: row;
  height: 56px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.red_light};
`

export const IconContainer = styled.View`
  height: 56px;
  max-width: 55px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-right: 2px;
`

export const InputText = styled.TextInput`
  flex:1;

  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  padding: 0 23px;
`