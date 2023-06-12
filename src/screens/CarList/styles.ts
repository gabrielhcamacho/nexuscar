import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { CarDTO } from '../../dtos/CarDTO'


export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  flex: 1;
  padding: 50px 20px;
  padding-bottom: 0;
`;

export const Header = styled.View`
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
  font-family: ${({ theme }) => theme.fonts.primary_400};
`


export const SearchBarContainer = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  padding: 10px 20px;
  margin-bottom: 20px;
`

export const SearchInput = styled.TextInput`
  height: 100%;
  width: 85%;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
`

export const CarFlatList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle:{
    //padding: 24
  },
  showsVerticalScrollIndicator: false, 
  showsHorizontalScrollIndicator: false,
})`
`

export const AddCarButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`
