import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import * as yup from 'yup'


import {
    Container,
    Header,
    Steps,
    Content,
    SelectPhoto,
    UploadPhotoText,
    Form,
    FormTitle,
    Footer,
} from './styles'

import { BackButton } from '../../../components/BackButton';
import { ConfirmButton } from '../../../components/ConfirmButton';
import { ImageSlider } from '../../../components/ImageSlider';
import { FormInput } from '../../../components/FormInput';
import { useNavigation } from '@react-navigation/native';
import { Bullets } from '../../../components/Bullets';
import { Alert } from 'react-native';

export function AddCarFirstStep() {

    const theme = useTheme()
    const navigation = useNavigation()

    const [photos, setPhotos] = useState([])
    const [placa, setPlaca] = useState('')
    const [renavam, setRenavam] = useState('')
    const [modelo, setModelo] = useState('')
    const [marca, setMarca] = useState('')
    const [anoCarro, setAnoCarro] = useState('')
    const [cor, setCor] = useState('')


    async function handleNextStep() {
        try {
            const schema = yup.object().shape({
                cor: yup.string().required('cor é obrigatória'),
                anoCarro: yup.string().required('ano do carro é obrigatório'),
                marca: yup.string().required('marca do carro é obrigatório'),
                modelo: yup.string().required('modelo do carro é obrigatio'),
                renavam: yup.string().required('renavam é obrigatório'),
                placa: yup.string().required('placa é obrigatório'),
            })

            const data = { placa, renavam, modelo, marca, anoCarro, cor }
            await schema.validate(data)
            navigation.navigate('AddCarSecondStep' as never, { carroData: data } as never)
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                Alert.alert('Opa', error.message)
            }
            else {
                Alert.alert('Opa', 'Ocorreu um erro, tente novamente em alguns instantes')
            }
        }
    }

    return (
        <Container>
            <Header>
                <BackButton pageName='Voltar' />
                <Steps>
                    <Bullets active />
                    <Bullets />
                </Steps>
            </Header>

            {/* <ImageSlider imagesUrl={photos} /> */}
            <Content>
                <SelectPhoto>
                    <Feather name="upload" size={34} color={theme.colors.header} />
                    <UploadPhotoText>Selecionar fotos</UploadPhotoText>
                </SelectPhoto>

                <Form>
                    <FormTitle>1. Dados do Carro</FormTitle>
                    <FormInput
                        ionicName='ios-car-sport-outline'
                        placeholder='Placa'
                        ionicIcons
                        onChangeText={setPlaca}
                        value={placa}
                        autoCapitalize='characters'
                    />
                    <FormInput
                        ionicIcons
                        ionicName='ios-document-text-outline'
                        placeholder='Renavam'
                        keyboardType='email-address'
                        onChangeText={setRenavam}
                        value={placa}
                        autoCapitalize="none"
                    />
                    <FormInput
                        ionicIcons
                        ionicName='cube-outline'
                        placeholder='Modelo'
                        keyboardType='email-address'
                        onChangeText={setModelo}
                        value={modelo}
                        autoCapitalize="none"
                    />
                    <FormInput
                        ionicIcons
                        ionicName='pricetag-outline'
                        placeholder='Marca'
                        keyboardType='email-address'
                        onChangeText={setMarca}
                        value={marca}
                        autoCapitalize="none"
                    />
                    <FormInput
                        iconName='calendar'
                        placeholder='Ano'
                        keyboardType='email-address'
                        onChangeText={setAnoCarro}
                        value={anoCarro}
                        autoCapitalize="none"
                    />
                    <FormInput
                        ionicIcons
                        ionicName='ios-color-palette-outline'
                        placeholder='Cor'
                        keyboardType='email-address'
                        onChangeText={setCor}
                        value={cor}
                        autoCapitalize="none"
                    />
                </Form>
            </Content>

            <Footer>
                <ConfirmButton title='cadastrar' color={theme.colors.red} onPress={handleNextStep} />
            </Footer>
        </Container>
    );
}