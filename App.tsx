import React from 'react';
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo'

import { Home } from './src/screens/Home';
import theme from './src/styles/theme';
import { CarList } from './src/screens/CarList';
import { CarDetails } from './src/screens/CarDetails';
import { VendaConfirmada } from './src/screens/VendaConfirmada';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium, Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <VendaConfirmada/>
    </ThemeProvider>
  );
}
