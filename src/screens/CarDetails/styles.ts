import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  flex: 1;
  padding: 50px 0px 0px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;  

`
export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`

export const BackToPage = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.header};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`

export const RightButton = styled.TouchableOpacity`
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    paddingTop: 0,
    alignItems: 'center'
  },
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})`
  
`
export const Details = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: 'center';
    justify-content: space-between;
    margin-top: 30px;
`
export const Description = styled.View`
`

export const Brand = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({theme}) => theme.colors.text_detail};
    font-size: ${RFValue(12)}px;
    text-transform: uppercase;
`
export const Name = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(18)}px;
`

export const Valor = styled.View``

export const Venda = styled.Text`
   font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({theme}) => theme.colors.text_detail};
    font-size: ${RFValue(12)}px;
    text-transform: uppercase;
`
export const Price = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_500};
    color: ${({theme}) => theme.colors.red};
    font-size: ${RFValue(18)}px;
`

export const About = styled.Text`
  /* font-family: ${({theme}) => theme.fonts.primary_400}; */
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  text-align: justify;
  margin-top: 10px;
  line-height: ${RFValue(23)}px;
`

export const SummaryContainer = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top:16px;
`

export const Footer = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.background_secondary};
  padding: 24px 24px ${getBottomSpace() + 24}px;
`