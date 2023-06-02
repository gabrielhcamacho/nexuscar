import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px; 
`

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`

export const BackToPage = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.header};
  font-family: ${({ theme }) => theme.fonts.primary_400}
`