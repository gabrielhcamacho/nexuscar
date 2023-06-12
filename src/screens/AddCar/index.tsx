import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';

import {
    Container,
    Header,
    Footer
} from './styles'
import { ConfirmButton } from '../../components/ConfirmButton';

export function AddCar() {
    return (
        <Container>
            <Header>
                <BackButton pageName='List' />
            </Header>

            <Footer>
                <ConfirmButton title='cadastrar' color='green'/>
            </Footer>
        </Container>
    );
}