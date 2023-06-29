import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import * as yup from 'yup'


import { BackButton } from '../../../components/BackButton';
import { Bullets } from '../../../components/Bullets';
import { FormInput } from '../../../components/FormInput';

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

export function SignUpFirstStep() {

    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [email,setEmail] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [location, setLocation] = useState('')

    async function handleNextStep(){
        try{
            console.log(location)
            const schema = yup.object().shape({
                location: yup.string(),
                cnpj: yup.string().required('cnpj é obrigatório'),
                email: yup.string().required('email é obrigatio').email('Digite um e-mail valido'),
                name: yup.string().required('nome é obrigatório'),
            })

            const data = { name, email, cnpj, location }
            await schema.validate(data)
            navigation.navigate('SignUpSecondStep' as never, { user: data } as never)
        }catch (error){
            if(error instanceof yup.ValidationError){
                Alert.alert('Opa', error.message)
            }
        }
       
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <BackButton pageName="Login" />
                        <Steps>
                            <Bullets active />
                            <Bullets />
                        </Steps>
                    </Header>

                    <Title>Crie sua{'\n'}conta</Title>
                    <Subtitle>Faça seu cadastro de{'\n'}forma rápida e facíl</Subtitle>

                    <Form>
                        <FormTitle>1. Dados</FormTitle>
                        <FormInput
                            iconName='user'
                            placeholder='Nome'
                            onChangeText={setName}
                            value={name}
                        />
                        <FormInput
                            iconName='mail'
                            placeholder='E-mail'
                            keyboardType='email-address'
                            onChangeText={setEmail}
                            value={email}
                        />
                        <FormInput
                            ionicIcons
                            ionicName='car-outline'
                            placeholder='CNPJ'
                            keyboardType='numeric'
                            //se fosse numero onChangeText={(value) => setCnpj(Number(value))}
                            onChangeText={setCnpj}
                            value={cnpj}
                        />
                        <LocationInput
                            iconName='map-pin'
                            placeholder='Cidade'
                            onChangeText={setLocation}
                            value={location}
                        />
                    </Form>

                    <ConfirmButton
                        title='próximo'  
                        onPress={handleNextStep} 
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    );
}