import React, {useState} from 'react';
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { TextInputProps } from 'react-native';

import {
    Container,
    InputText,
    IconContainer
} from './styles'

interface Props extends TextInputProps{
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export function FormInput({iconName, value, ...rest}: Props) {

    const theme = useTheme()
    const [isOnFocus, setIsOnFocus] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    function handleInputFocus(){
        setIsOnFocus(true);
    }

    function handleInputBlur(){
        setIsOnFocus(false);
        setIsFilled(!!value) //verifica se tem conteudo, se tiver seta vertadeiro, se nao, falso
    }

    return (
        <Container isOnFocus={isOnFocus}>
            <IconContainer>
                <Feather 
                    name={iconName} 
                    size={24} 
                    color={(isOnFocus || isFilled) ? theme.colors.red : theme.colors.text_detail} />
            </IconContainer>
            <InputText 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...rest}
            />
        </Container>
    );
}