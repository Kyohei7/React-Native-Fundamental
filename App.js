// Functional Component
import React, { Component } from 'react';
import {Text, View, Image, TextInput, StyleSheet} from 'react-native'; 
import macbook from './macbook.jpg'

const App = () => {
  return <StyleReactNativeComponent/>
}

const StyleReactNativeComponent = () => {
  return (
    <View>
        <View 
          style={{
            padding: 12, 
            backgroundColor: '#F2F2F2', 
            width: 212, 
            borderRadius: 8
            }}>
          <Image 
            source={macbook}
            style={{
              width: 188, 
              height: 107, 
              borderRadius: 8
              }} 
            />
          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}} >
            New Macbook Pro 2019
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16, color: 'orange'}}>
            Rp. 25.000.000,-
          </Text>
          <Text style={{fontSize: 14, fontWeight: '300', marginTop: 12}}>
            Jakarta Selatan
          </Text>
          <View 
            style={{
              backgroundColor: '#6FCF97', 
              paddingVertical: 6,
              borderRadius: 25,
              marginTop: 20
              }}>
            <Text 
              style={{
                fontSize: 14, 
                fontWeight: '600', 
                color: 'white', 
                textAlign: 'center'
              }}
            >Buy Now
            </Text>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 20

  }
})

const SampleComponent = () => {
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