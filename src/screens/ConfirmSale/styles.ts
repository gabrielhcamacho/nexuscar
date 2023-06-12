import { getBottomSpace } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
background-color: ${({ theme }) => theme.colors.background_primary};
  flex: 1;
  padding: 50px 20px;
  padding-bottom: 0;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;  
`

export const Footer = styled.View`
  width: 100%;
  padding: 24px 24px ${getBottomSpace() + 24}px;
`

export const ConfirmButton = styled.TouchableOpacity`
    width: 100%;
    padding: 19px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.green};
    border-radius: 10px;
`

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.shape};
`