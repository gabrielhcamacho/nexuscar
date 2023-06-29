import React, {useState} from 'react';
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
    Container,
    InputText,
    IconContainer,
} from './styles'

interface Props extends TextInputProps{
    iconName?: React.ComponentProps<typeof Feather>['name'];
    ionicName?: React.ComponentProps<typeof Ionicons>['name'];
    value?: string;
    ionicIcons?: boolean;
}



export function LocationInput({iconName, value, ionicIcons, ionicName, ...rest}: Props){

    const theme = useTheme()
    const [isOnFocus, setIsOnFocus] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [input, setInput] = useState('')
    const [locationData, setLocationData] = useState()

    function handleInputFocus(){
        setIsOnFocus(true);
    }

    function handleInputBlur(){
        setIsOnFocus(false);
        setIsFilled(!!value) //verifica se tem conteudo, se tiver seta vertadeiro, se nao, falso
    }

    // async function handleSearchLocation(text: string){
    //     setInput(text)
    // }


    return (
        <Container >
            <IconContainer isOnFocus={isOnFocus}>
                {
                    ionicIcons 
                    ? 
                    <Ionicons name={ionicName}  size={32} color={(isOnFocus || isFilled) ? theme.colors.red : theme.colors.text_detail} />
                    : 
                    <Feather 
                    name={iconName} 
                    size={24} 
                    color={(isOnFocus || isFilled) ? theme.colors.red : theme.colors.text_detail} />
                }
                
            </IconContainer>
            <InputText 
                isOnFocus={isOnFocus}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...rest}
            />
        </Container>
    )
}