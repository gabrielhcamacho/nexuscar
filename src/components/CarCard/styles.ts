import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  width: 100%;
  height: 126px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  margin-bottom: 16px;
  border-radius: 10px;
`

export const Details = styled.View`
`

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`

export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`

export const Info = styled.View`
  margin-right: 16px;
`

export const Placa = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
  
  margin: 4px 0px;
`

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.red};
  font-size: ${RFValue(16)}px;

`

export const Type = styled.View`
  margin-left: 10px;
`


export const CarImage = styled.Image`
  width: 167px;
  height: 85px;
  border-radius: 10px;
`

export const InterestedIcon = styled(Ionicons)`
  font-size:  ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.title};
  margin-bottom: 2px;
`