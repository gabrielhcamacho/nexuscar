import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  flex: 1;
`;

export const DashboardContainer = styled.View`
  padding: 40px 30px;
`
export const DashCard = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  width: 100%;
  height: 200px;
  border-radius: 10px;
  padding: 20px 30px; 
`

export const CarrosTotal = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(28)}px;
`

export const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const Venda = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(18)}px;
`

export const SeeMoreButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.green};
    padding: 24px;
    border-radius: 8px;
    width: 150px;
    margin-top: 20px;
`

export const Txt = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: #FFF;
  font-size: ${RFValue(18)}px;
`