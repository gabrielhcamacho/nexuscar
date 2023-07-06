import React, { useState } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import * as yup from 'yup'
import { useNavigation } from '@react-navigation/native';

import { ConfirmButton } from '../../components/ConfirmButton';
import { FormInput } from '../../components/FormInput';
import { PasswordInput } from '../../components/PasswordInput';
import theme from '../../styles/theme';
import { useAuth } from '../../hooks/auth'

import {
  Container,
  Header,
  Title,
  Subtitle,
  Form,
  Footer
} from './styles'

export function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigation = useNavigation()
  const { signIn } = useAuth()

  async function handleSignIn() {
    try {
      const schema = yup.object().shape({
        email: yup.string()
          .required("E-mail é obrigatório")
          .email('Digite um e-mail valido'),
        password: yup.string().required("A senha é obrigatória"),
      })
      await schema.validate({ email, password })
      
      signIn({email, password})

    } catch (error) {
      if (error instanceof yup.ValidationError) {
        Alert.alert('Opa', error.message)
      } else {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique as credenciais'
        )
      }
    }
  }

  function handleNewAccount(){
    navigation.navigate('SignUpFirstStep' as never)
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle='dark-content'
            backgroundColor='transparent'
            translucent
          />

          <Header>
            <Title>Bem vindo a{'\n'}Nexus Car</Title>
            <Subtitle>Faça login para começar sua experiência</Subtitle>
          </Header>

          <Form>
            <FormInput
              iconName="mail"
              placeholder='E-mail'
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />
            <PasswordInput
              iconName="lock"
              placeholder='Senha'
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <ConfirmButton
              title='Login'
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />
            <ConfirmButton
              light
              title='Criar uma conta'
              color={theme.colors.background_secondary}
              onPress={handleNewAccount}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}