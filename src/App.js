// Functional Component
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import CallApiAxios from './pages/CallApiAxios';
import CallApiVanillaJs from './pages/CallApiVanillaJs';
import CardView from './pages/CardView'
import ComunicationComponent from './pages/ComunicationComponent';
import FlexBox from './pages/FlexBox'
import LocalApi from './pages/LocalApi';
import Position from './pages/Position'
import PropsDynamic from './pages/PropsDynamic';
import ReactNativeSvg from './pages/ReactNativeSvg';
import StateDynamic from './pages/StateDynamic/inde';
import Router from './router';


const App = () => {  
  return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
  )
}

export default App