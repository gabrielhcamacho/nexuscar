import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background_primary};
  flex: 1;
  padding: 70px 20px;
`;

export const SearchBarContainer = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.background_secondary};

  padding: 10px 20px;
  margin-bottom: 20px;
`

export const SearchInput = styled.TextInput`
  height: 100%;
  width: 85%;
  font-size: 20px;
  color: ${({theme}) => theme.colors.title};
`
