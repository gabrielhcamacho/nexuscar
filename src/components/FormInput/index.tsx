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
    iconName: React.ComponentProps<typeof Feather>['name']
}

export function FormInput({iconName, ...rest}: Props) {

    const theme = useTheme()
    const [isOnFocus, setIsOnFocus] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    function handleInputFocus(){
        setIsOnFocus(true);
    }

    function handleInputBlur(){
        setIsOnFocus(false);
    }

    return (
        <Container isOnFocus={isOnFocus}>
            <IconContainer>
                <Feather 
                    name={iconName} 
                    size={24} 
                    color={isOnFocus ? theme.colors.red : theme.colors.text_detail} />
            </IconContainer>
            <InputText 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...rest}
            />
        </Container>
    );
}