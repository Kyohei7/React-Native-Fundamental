import React, { useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('ReactNativeSvg')
        }, 3000)
    })

    return(
        <View style={styles.wrapper} >
            <Text style={styles.textTittle} >Splash Screen Test</Text>
        </View>
    )
}

export default Splash

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