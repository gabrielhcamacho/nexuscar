import { RectButton } from 'react-native-gesture-handler'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface optionProps {
  active: boolean
}

export const Container = styled.View`
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

export const Content = styled.View`
  padding: 24px;
  margin-top: 122px;
`

export const ContentHeader = styled.View`
  border-bottom-width: 1px solid;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 24px;
`

export const Option = styled.TouchableOpacity<optionProps>`
  padding-bottom: 14px;

${({ active }) => active && css`
  border-bottom-width: 2px solid;
  border-bottom-color: ${({ theme }) => theme.colors.red};
`}
`

export const OptionTitle = styled.Text<optionProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme, active }) =>
    active ? theme.fonts.secondary_600 : theme.fonts.secondary_500
  };
  color: ${({ theme, active }) =>
    active ? theme.colors.header : theme.colors.text_detail
  };
`

export const Section = styled.View``