// Functional Component
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import CardView from './pages/CardView'
import FlexBox from './pages/FlexBox'
import Position from './pages/Position'


const App = () => {
  
  const [tampil, setTampil] = useState(true) // Fucntion Component dengan Hooks
  useEffect(() => {
    setTimeout(() => {
      setTampil(false)
    },5000)
  }, [])
  
  return (
    <View>
      { tampil && <FlexBox /> }
      {/* <FlexBox /> */}
    </View>
  )
}

export default App