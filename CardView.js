
import React, { Component } from 'react';
import {Text, View, Image} from 'react-native'; 
import macbook from './macbook.jpg'

// export 
const CardView = () => {
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
              
              <Text 
                style={{
                    fontSize: 14, 
                    fontWeight: 'bold', 
                    marginTop: 16
                    }} >
                    New Macbook Pro 2019
              </Text>
              
              <Text style={{
                  fontSize: 14, 
                  fontWeight: 'bold', 
                  marginTop: 16, 
                  color: 'orange'
                  }}>
                    Rp. 25.000.000,-
              </Text>
              
              <Text style={{
                  fontSize: 14, 
                  fontWeight: '300', 
                  marginTop: 12
                  }}>
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
                  }}>
                      Buy Now
                </Text>
              </View>
            </View>
        </View>
      )
}

export default CardView