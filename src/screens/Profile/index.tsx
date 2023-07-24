import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import * as ImagePicker from 'expo-image-picker';

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
  const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name)

  const theme = useTheme()
  const navigation = useNavigation()


  function handleSignOut() { }

  function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
    setOption(optionSelected)
  }

  async function handleSelectAvatar(){
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, 
      aspect: [4, 4],
      quality: 1,
    })

    if(result.canceled){
      return;
    }

    if(!result.canceled){
      setAvatar(result.assets[0].uri);
    }
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
             { !!avatar && <Photo source={{ uri: avatar }} />}
              <PhotoButton onPress={handleSelectAvatar}>
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
                    onChangeText={setName}
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