import { Dimensions } from 'react-native'
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

export const Steps = styled.View`
  flex-direction: row;
  align-items: center;
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

export const SelectPhoto = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  margin-top: 15px;
    width: 100%;
    height: 150px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

export const UploadPhotoText = styled.Text`
  margin-top: 20px;
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.header};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`

export const Form = styled.View`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 16px;
`

export const FormTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 24px;
`

export const Footer = styled.View`
  width: 100%;
  padding: 14px 24px ${getBottomSpace()}px;
`

