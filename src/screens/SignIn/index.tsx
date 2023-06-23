import React from 'react';
import { StatusBar } from 'react-native'
import { ConfirmButton } from '../../components/ConfirmButton';
import { FormInput } from '../../components/FormInput';
import { Input } from '../../components/Input';
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
  return (
    <Container>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      <Header>
        <Title>Estamos{'\n'}quase lá</Title>
        <Subtitle>Faça seu login para começar a vender</Subtitle>
      </Header>

      <Form>
        <Input iconName="mail" placeholder='E-mail'/>
        <FormInput iconName="mail"/>
      </Form>

      <Footer>
        <ConfirmButton title='Login' onPress={() => { }} enabled={false} loading={false} />
        <ConfirmButton light title='Criar conta' color={theme.colors.background_secondary} onPress={() => { }} />
      </Footer>
    </Container>
  );
}