import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({theme}) =>  theme.colors.header};
  flex: 1;

  padding-top: 96px;
`

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;
`

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    color: ${({theme}) =>  theme.colors.shape};
    font-family ${({theme}) =>  theme.fonts.secondary_600};

    margin-top: 40px;
`

export const Message = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({theme}) =>  theme.colors.text_detail};
    font-family ${({theme}) =>  theme.fonts.primary_400};
    text-align: center;
    margin-top: 16px;
    line-height: ${RFValue(25)}px;
`

export const OkButton = styled.TouchableOpacity`
    width: 80px;
    height: 56px;
    background-color: ${({theme}) =>  theme.colors.shape_dark};
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`

export const ButtonText = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({theme}) =>  theme.colors.shape};
    font-family ${({theme}) =>  theme.fonts.primary_500};
`

export const Footer = styled.View`
    width: 100%;
    align-items: center;
    margin: 80px 0px;
`
