import React, { useState } from 'react';
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { TextInputProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'

import {
    Container,
    InputText,
    IconContainer,
} from './styles'

interface Props extends TextInputProps{
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export function PasswordInput({iconName, value, ...rest}: Props) {

    const theme = useTheme()
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)
    const [isOnFocus, setIsOnFocus] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    function handlePasswordVisibilityChange(){
        setIsPasswordVisible(prevState => !prevState)
    }

    function handleInputFocus(){
        setIsOnFocus(true);
    }

    function handleInputBlur(){
        setIsOnFocus(false);
        setIsFilled(!!value) //verifica se tem conteudo, se tiver seta vertadeiro, se nao, falso
    }

    return (
        <Container>
            <IconContainer isOnFocus={isOnFocus}>
                <Feather 
                    name={iconName} 
                    size={24} 
                    color={(isOnFocus || isFilled) ? theme.colors.red : theme.colors.text_detail} />
            </IconContainer>

            <InputText 
                isOnFocus={isOnFocus}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                secureTextEntry={isPasswordVisible}
                {...rest}
            />
            <BorderlessButton onPress={handlePasswordVisibilityChange}>
                <IconContainer isOnFocus={isOnFocus}>
                    <Feather 
                        name={isPasswordVisible ? 'eye' : 'eye-off'}
                        size={24} 
                        color={theme.colors.text_detail} 
                    />
                </IconContainer>
            </BorderlessButton>

        </Container>
    );
}