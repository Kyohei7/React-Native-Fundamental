// Fungsional Component
// Arrow Function

import React from 'react';
import {Text, View, Image, TextInput} from 'react-native'; 

const App = () => {
  return (
    <View>
      <View style={{width: 80, height:80, backgroundColor:'blue'}} />
      <Text>Muhammad</Text>
      <Text>Muhammad</Text>
      <Text>Muhammad</Text>
      <Rizki/>
      <Photo/>
      <TextInput style={{borderWidth: 1}} />
    </View>
  )
}

const Rizki = () => {
  return <Text>Rizki Azmi</Text>
}

const Photo = () => {
  return (
    <Image 
          source={{uri: 'https://placeimg.com/100/100/tech'}} 
          style={{width: 100, height:100}} />
  )
}

export default App