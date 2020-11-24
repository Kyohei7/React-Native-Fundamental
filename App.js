// Functional Component
import React, { Component } from 'react';
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
      <BoxBlue/>
      <Profile/>
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


// Class Component
class BoxBlue extends Component {
  render() {
    return <Text>Contoh Dari Class Component</Text>
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image 
          source={{uri: 'https://placeimg.com/100/100/tech'}} 
          style={{width: 100, height:100, borderRadius: 50}}
        />
        <Text>
          Ini bagian foto di Profile
        </Text>
      </View>
      
    )
  }
}









export default App