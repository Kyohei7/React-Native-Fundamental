import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import macbook from '../../../src/assets/image/macbook.jpg'

const Position = () => {
    return (
        <View style={styles.wrapper} >
            <View style={styles.cardWrapper}>
                <Image source={macbook} style={styles.icon} />
                <Text style={styles.notif} >20</Text>
            </View>
            <Text style={styles.text} >Online</Text>
        </View>
    )
}

export default Position

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
    wrapper: { padding: 20, alignItems: 'center' },
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
