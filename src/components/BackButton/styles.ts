import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const BackToPage = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.header};
  font-family: ${({ theme }) => theme.fonts.primary_400}
`