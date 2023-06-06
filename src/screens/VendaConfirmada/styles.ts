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
`

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    color: ${({theme}) =>  theme.colors.shape};
    font-family ${({theme}) =>  theme.fonts.secondary_600};

    margin-top: 40px;
`

export const Message = styled.Text`

`
