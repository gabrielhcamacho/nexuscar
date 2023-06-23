import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    Extrapolate,
    runOnJS
} from 'react-native-reanimated';

import BrandSVG from '../../assets/x-logo.svg'
import LogoSVG from '../../assets/nexuslogo.svg'


import {
    Container,
} from './styles'


export function Splash() {

    const splashAnimation = useSharedValue(0)
    const navigation = useNavigation()

    const brandStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value,
                [0, 50],
                [1, 0],
            ),
            transform: [{
                translateX: interpolate(splashAnimation.value,
                    [0, 50],
                    [0, -50],
                    Extrapolate.CLAMP)
            }
            ]

        }
    })

    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value,
                [0, 25, 50],
                [0, .3, 1],
            ),
            transform: [{
                translateX: interpolate(splashAnimation.value,
                    [0, 50],
                    [-50, 0],
                    Extrapolate.CLAMP)
            }
            ]

        }
    })

    function startApp(){
        navigation.navigate('Home')
    }

    useEffect(() => {
        splashAnimation.value = withTiming(50, { duration: 1000 }, () => {
            'worklet'
            runOnJS(startApp)();
        })
    }, [])

    return (
        <Container>
            <Animated.View style={[brandStyle, {position: 'absolute'}]}>
                <BrandSVG width={80} height={59} />
            </Animated.View>

            <Animated.View style={[logoStyle, {position: 'absolute'}]}>
                <LogoSVG width={200} height={40} />
            </Animated.View>

        </Container>
    );
}

