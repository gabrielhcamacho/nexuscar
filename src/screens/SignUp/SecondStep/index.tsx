import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import { BackButton } from '../../../components/BackButton';
import { Bullets } from '../../../components/Bullets';
import { FormInput } from '../../../components/FormInput';
import { useTheme } from 'styled-components';
import { Confirmacao } from '../../Confirmacao';

import {
    Container,
    Header,
    Steps,
    Title,
    Subtitle,
    Form,
    FormTitle,
} from './styles'
import { LocationInput } from '../../../components/LocationInput';
import { ConfirmButton } from '../../../components/ConfirmButton';
import { PasswordInput } from '../../../components/PasswordInput';


interface Params {
    user: {
        name: string,
        email: string,
        cnpj: string,
        location: string,
    }
}

export function SignUpSecondStep() {

    const theme = useTheme()
    const navigation = useNavigation()
    const route = useRoute()
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const { user } = route.params as Params

    async function handleRegister() {
        if (!password || !passwordConfirm) {
            return Alert.alert("Informe a senha e a confirmação")
        }
        if (password != passwordConfirm) {
            return Alert.alert("As senhas precisam ser as mesmas")
        }

        navigation.navigate('Confirmacao' as never, {
            title: 'Conta Criada',
            message: `Agora é só fazer login\ne aproveitar`,
            nextScreenRoute: 'SignIn'
        } as never)
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <BackButton pageName="Voltar" />
                        <Steps>
                            <Bullets />
                            <Bullets active />
                        </Steps>
                    </Header>


                    <Form>
                        <FormTitle>2. Senha</FormTitle>
                        <PasswordInput
                            iconName="lock"
                            placeholder='Senha'
                            onChangeText={setPassword}
                            value={password}
                        />
                        <PasswordInput
                            iconName="lock"
                            placeholder='Confirmar senha'
                            onChangeText={setPasswordConfirm}
                            value={passwordConfirm}
                        />
                    </Form>

                    <ConfirmButton
                        title='Cadastrar'
                        color={theme.colors.green}
                        onPress={handleRegister}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    );
}