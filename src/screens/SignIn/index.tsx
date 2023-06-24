import React, { useState } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { ConfirmButton } from '../../components/ConfirmButton';
import { FormInput } from '../../components/FormInput';
import { PasswordInput } from '../../components/PasswordInput';
import theme from '../../styles/theme';

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
            <Title>Estamos{'\n'}quase lá</Title>
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
            <ConfirmButton title='Login' onPress={() => { }} enabled={false} loading={false} />
            <ConfirmButton light title='Criar uma conta' color={theme.colors.background_secondary} onPress={() => { }} />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}