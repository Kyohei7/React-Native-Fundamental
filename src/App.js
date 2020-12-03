// Functional Component
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
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
      <CallApiVanillaJs />
    </View>
  )
}

export default App