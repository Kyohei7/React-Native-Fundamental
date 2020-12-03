// Functional Component
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import CallApiAxios from './pages/CallApiAxios';
import CallApiVanillaJs from './pages/CallApiVanillaJs';
import CardView from './pages/CardView'
import ComunicationComponent from './pages/ComunicationComponent';
import FlexBox from './pages/FlexBox'
import Position from './pages/Position'
import PropsDynamic from './pages/PropsDynamic';
import ReactNativeSvg from './pages/ReactNativeSvg';
import StateDynamic from './pages/StateDynamic/inde';


const App = () => {  
  return (
    <View>
      <CallApiAxios />
    </View>
  )
}

export default App