import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IllustrationApp from '../../assets/image/app.svg'


const ReactNativeSvg = () => {
    return(
        <View style={{alignItems: 'center', marginTop: 30}}>
            <Text style={{fontSize: 20}} >React Native SVG</Text>
            <IllustrationApp width={700} height={700} />
        </View>
    )
}

export default ReactNativeSvg

const styles = StyleSheet.create({

})