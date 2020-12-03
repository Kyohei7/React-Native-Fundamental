import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Cart from '../components/Cart'
import Product from '../components/Product'


const ComunicationComponent = () => {

    const [totalProduct, setTotalProduct] = useState(0)

    return(
        <View style={styles.wrapper} >
            <Text style={styles.textTittle} >Comunication Component</Text>
            <Cart jumlah={totalProduct} />
            <Product buttonOnPress={() => setTotalProduct(totalProduct + 1) } />
        </View>
    )
}

export default ComunicationComponent

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        
    },
    textTittle: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 20
    },
})