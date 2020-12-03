import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import macbook from '../../../assets/image/macbook.jpg'


const Cart = (props) => {
    return(
        <View style={{alignItems: 'center', marginTop: 30}} >
            <View style={styles.cardWrapper}>
                <Image source={macbook} style={styles.icon} />
                <Text style={styles.notif} >{props.jumlah}</Text>
            </View>
            <Text style={styles.text} >Cart</Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    text: {marginTop: 10, fontSize: 20},
    cardWrapper: {
        borderWidth: 1, 
        borderColor: '#4398D1', 
        width: 93, 
        height: 93, 
        borderRadius: 93 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    icon: { width: 93, height: 93, borderRadius: 93 / 2}
})