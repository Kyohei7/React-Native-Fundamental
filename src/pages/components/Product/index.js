import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import macbook from '../../../assets/image/macbook.jpg'


const Product = (props) => {
    return(
        <View style={styles.container} >
            <View style={styles.wrapper}>
                <Image source={macbook} style={styles.image} />
                <Text style={styles.productName}> New Macbook Pro 2019 </Text>
                <Text style={styles.productPrice}> Rp. 25.000.000,- </Text>
                <Text style={styles.productLocation}> Jakarta Selatan </Text>
                <TouchableOpacity onPress={props.buttonOnPress} >
                  <View style={styles.productButton}>
                    <Text style={styles.textButton}> Buy Now</Text>
                  </View>
                </TouchableOpacity>
              
            </View>
        </View>
    )
}


export default Product

const styles = StyleSheet.create({
    container: {
      alignItems: 'center', 
      marginTop: 20
    },
    wrapper: {
      padding: 12, 
      backgroundColor: '#F2F2F2', 
      width: 212, 
      borderRadius: 8
    },
    image: {
      width: 188, 
      height: 107, 
      borderRadius: 8
    },
    productName: {
      fontSize: 14, 
      fontWeight: 'bold', 
      marginTop: 16
    },
    productPrice: {
      fontSize: 14, 
      fontWeight: 'bold', 
      marginTop: 16, 
      color: 'orange'
    },
    productLocation: {
      fontSize: 14, 
      fontWeight: '300', 
      marginTop: 12
    },
    productButton: {
      backgroundColor: '#6FCF97', 
      paddingVertical: 6,
      borderRadius: 25,
      marginTop: 20
    },
    textButton: {
      fontSize: 14, 
      fontWeight: '600', 
      color: 'white', 
      textAlign: 'center'
    }
})