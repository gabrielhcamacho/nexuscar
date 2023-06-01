import styled from 'styled-components/native'

export const Container = styled.View`
 width: 100%;
  height: 113px;

  background-color: ${({theme}) => theme.colors.header};
  justify-content: flex-end;
  padding: 32px 24px
`