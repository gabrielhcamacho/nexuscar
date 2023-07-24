import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import {
  Container,
  Header,
  AddCarButton,
  HeaderTitle,
  HeaderTop,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  ContentHeader,
  Option,
  OptionTitle,
  Section
} from './styles'


import { BackButton } from '../../components/BackButton';
import { FormInput } from '../../components/FormInput';
import { PasswordInput } from '../../components/PasswordInput';
import { useAuth } from '../../hooks/auth';

export function Profile() {

  const { user } = useAuth()
  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit')
  const theme = useTheme()
  const navigation = useNavigation()

  function handleSignOut() { }

  function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
    setOption(optionSelected)
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>

          <Header>

            <HeaderTop>
              <BackButton color={theme.colors.background_secondary} />
              <HeaderTitle>Editar Perfil</HeaderTitle>
              <AddCarButton onPress={handleSignOut}>
                <Ionicons name="log-out-outline" size={30} color={theme.colors.shape} />
              </AddCarButton>
            </HeaderTop>

            <PhotoContainer>
              <Photo source={{ uri: 'https://instacarmultimarcas.com.br/sites/instacarmultimarcas.com.br/img/img-og.png' }} />
              <PhotoButton onPress={() => { }}>
                <Ionicons name="camera-outline" size={24} color={theme.colors.shape} />
              </PhotoButton>
            </PhotoContainer>

          </Header>


          <Content style={{ marginBottom: useBottomTabBarHeight() }}>
            <ContentHeader>
              <Option
                active={option === 'dataEdit'}
                onPress={() => handleOptionChange('dataEdit')}
              >
                <OptionTitle active={option === 'dataEdit'}>Dados</OptionTitle>
              </Option>
              <Option active={option === 'passwordEdit'}>
                <OptionTitle
                  active={option === 'passwordEdit'}
                  onPress={() => handleOptionChange('passwordEdit')}
                >Trocar Senha</OptionTitle>
              </Option>
            </ContentHeader>

            {
              option == 'dataEdit' ?
                <Section>
                  <FormInput
                    iconName="user"
                    placeholder="nome"
                    autoCorrect={false}
                    defaultValue={user.name}
                  />
                  <FormInput
                    iconName="mail"
                    editable={false}
                    defaultValue={user.email}
                  />
                  <FormInput
                    iconName="map-pin"
                    placeholder="Cidade"
                    autoCorrect={false}
                  />
                </Section>
                :
                <Section>
                  <PasswordInput
                    iconName="lock"
                    placeholder="Senha atual"
                  />
                  <PasswordInput
                    iconName="lock"
                    placeholder="Nova senha"
                  />
                  <PasswordInput
                    iconName="lock"
                    placeholder="Confirmar senha"
                  />
                </Section>
            }

          </Content>

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}