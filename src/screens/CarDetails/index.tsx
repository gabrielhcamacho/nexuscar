import React from 'react';
import { Ionicons } from '@expo/vector-icons';

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


export function CarDetails() {
    return (
        <Container>

            <Header>
                <BackButton pageName='List' onPress={() => { }} />
                <RightButton>
                    <Ionicons name="ios-create-outline" size={28} color="black" />
                </RightButton>
            </Header>


            <Content>
                <ImageSlider imagesUrl={['https://2.bp.blogspot.com/-y4n8sHWryNg/WMBLnqBrYBI/AAAAAAACCfE/75AXU0D-gToh-FU_4X-qGdG0EprvEKQUgCLcB/s1600/A171788_medium.jpg']} />

                <Details>
                    <Description>
                        <Brand>Audi</Brand>
                        <Name>A7</Name>
                    </Description>
                    <Valor>
                        <Venda>A venda por</Venda>
                        <Price>R$ 500.000</Price>
                    </Valor>
                </Details>

                <SummaryContainer>
                    <CarSummary name='aa' icon='ios-car-sport-outline' description='teste' />
                    <CarSummary name='aa' icon='ios-car-sport-outline' description='teste' />
                    <CarSummary name='aa' icon='ios-car-sport-outline' description='teste' />
                    <CarSummary name='aa' icon='ios-car-sport-outline' description='teste' />
                    <CarSummary name='aa' icon='ios-car-sport-outline' description='teste' />
                    <CarSummary name='aa' icon='ios-car-sport-outline' description='teste' />
                </SummaryContainer>

                <About>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur obcaecati temporibus, suscipit voluptas unde nulla nobis repudiandae ab
                </About>
            </Content>

            <Footer>
                <ConfirmButton title='vender'/>
            </Footer>

        </Container>
    );
}