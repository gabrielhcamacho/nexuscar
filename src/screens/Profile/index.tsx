import React from 'react';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  Header,
  AddCarButton,
  HeaderTitle,
  HeaderTop,
  PhotoContainer,
  Photo,
  PhotoButton,
} from './styles'


import { BackButton } from '../../components/BackButton';
import { useNavigation } from '@react-navigation/native';

export function Profile() {

  const theme = useTheme()
  const navigation = useNavigation()

  function handleSignOut() { }


  return (
    <Container>

      <Header>

        <HeaderTop>
          <BackButton color={theme.colors.background_secondary}/>
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <AddCarButton onPress={handleSignOut}>
            <Ionicons name="log-out-outline" size={30} color={theme.colors.shape} />
          </AddCarButton>
        </HeaderTop>

        <PhotoContainer>
          <Photo source={{ uri: 'https://instacarmultimarcas.com.br/sites/instacarmultimarcas.com.br/img/img-og.png'}}/>
          <PhotoButton onPress={() => {}}>
            <Ionicons name="camera-outline" size={24} color={theme.colors.shape} />
          </PhotoButton>
        </PhotoContainer>

      </Header>

    </Container>
  );
}