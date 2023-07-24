import { RectButton } from 'react-native-gesture-handler'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`

export const Header = styled.View`
    height: 227px;
    width:100%;

    background-color: ${({ theme }) => theme.colors.header};

    padding: 0 24px;
    align-items: center;
`

export const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  margin-top: ${getStatusBarHeight() + 40}px;
`

export const AddCarButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.background_secondary};
`


export const PhotoContainer = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: 48px;
`

export const Photo = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`

export const PhotoButton = styled(RectButton)`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red};

  position: absolute;
  bottom: 10px;
  right: 10px;
`