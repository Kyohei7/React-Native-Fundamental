import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Welcome = () => {
    return(
        <View style={styles.wrapper} >
            <Text style={styles.textTittle} >Welcome Screen Test</Text>
        </View>
    )
}

export default Welcome

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