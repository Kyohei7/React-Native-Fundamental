// Functional Component
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import CardView from './pages/CardView'
import ComunicationComponent from './pages/ComunicationComponent';
import FlexBox from './pages/FlexBox'
import Position from './pages/Position'
import PropsDynamic from './pages/PropsDynamic';
import StateDynamic from './pages/StateDynamic/inde';


const App = () => {
  
  // const [tampil, setTampil] = useState(true) // Function Component dengan Hooks
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTampil(false)
  //   },5000)
  // }, [])
  
  return (
    <View>
      <ComunicationComponent />
    </View>
  )
}

export default App