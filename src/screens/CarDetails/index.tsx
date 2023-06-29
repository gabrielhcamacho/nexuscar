import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native'

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
    Container,
    Header,
    Left,
    BackToPage,
    RightButton,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Price,
    Valor,
    Venda,
    About,
    SummaryContainer,
    Footer
} from './styles'
import { CarSummary } from '../../components/CarSummary';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';


interface Params{
    item: CarDTO;
}

export function CarDetails() {

    const navigation = useNavigation()
    const route = useRoute()
    const { item } = route.params as Params;
    console.log(item)

    function handleVender() {
        navigation.navigate('Confirmacao' as never, {
            title: 'Carro vendido',
            message: `Você pode ver o historico das vendas
            no menu do dashboard inicial`,
            nextScreenRoute: 'Home'
        } as never)
    }

    return (
        <Container>

            <Header>
                <BackButton pageName='List'/>
                <RightButton>
                    <Ionicons name="ios-create-outline" size={28} color="black" />
                </RightButton>
            </Header>


            <Content>
                <ImageSlider imagesUrl={item.photos} />

                <Details>
                    <Description>
                        <Brand>{item.brand}</Brand>
                        <Name>{item.name}</Name>
                    </Description>
                    <Valor>
                        <Venda>A venda por</Venda>
                        <Price>R$ {item.rent.price}.000,00</Price>
                    </Valor>
                </Details>

                <SummaryContainer>
                    <CarSummary name={item.placa} icon='ios-car-sport-outline' description='placa' />
                    <CarSummary name={item.renavam} icon='ios-document-text-outline' description='renavam' />
                    <CarSummary name={item.cor} icon='ios-color-palette-outline' description='cor' />
                    <CarSummary name={`R$ ${item.valorCompra}`} icon='ios-car-sport-outline' description='valor de compra' />
                </SummaryContainer>
 
                <About>
                   {item.about}
                </About>
            </Content>

            <Footer>
                <ConfirmButton title='vender' onPress={handleVender}/>
            </Footer>

        </Container>
    );
}