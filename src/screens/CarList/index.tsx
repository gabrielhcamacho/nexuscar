import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { CarCard } from '../../components/CarCard';
import api from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO'
import { Load } from '../../components/Load';
import { BackButton } from '../../components/BackButton';

import {
  Container,
  SearchBarContainer,
  SearchInput,
  Header,
  Left,
  BackToPage,
  CarFlatList,
  AddCarButton,
} from './styles'



export function CarList() {

  const [cars, setCars] = useState<CarDTO[]>([])
  const [load, setLoad] = useState(true)

  const carData = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    info: {
      placa: 'AZY-4355',
      price: 350.000,
    },
    image: 'https://2.bp.blogspot.com/-y4n8sHWryNg/WMBLnqBrYBI/AAAAAAACCfE/75AXU0D-gToh-FU_4X-qGdG0EprvEKQUgCLcB/s1600/A171788_medium.jpg'
  }


  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars')
        setCars(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoad(false)
      }
    }

    fetchCars()
  }, [])


  const navigation = useNavigation()

  function handleAddCar(){
    navigation.navigate('AddCar')
  }

  return (
    <Container>

      <Header>
        <BackButton pageName='Dashboard' />
        <AddCarButton onPress={() => handleAddCar()}>
          <Ionicons name="ios-add" size={30} color="black" />
        </AddCarButton>
      </Header>

      <StatusBar barStyle={'dark-content'} backgroundColor="transparent" translucent />
      <SearchBarContainer>
        <AntDesign name="search1" size={24} color="black" />
        <SearchInput />
      </SearchBarContainer>

      {load ? <Load /> :
        <CarFlatList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CarCard data={item} carData={item} />}
        />
      }

    </Container>
  );
}
