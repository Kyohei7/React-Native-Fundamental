import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import macbook from '../../../src/assets/image/macbook.jpg'


const Story = props => {
    return (
        <View style={{alignItems: 'center', marginRight: 20}} >
            <Image source={macbook} style={{width: 100, height: 100, borderRadius: 50}} />
            <Text style={{textAlign: 'center'}} >{props.name}</Text>
        </View>
    )
}


const PropsDynamic = () => {
    return (
        <View>
            <Text>Props Dynamic</Text>
            <ScrollView horizontal>
                <View style={{flexDirection: 'row', marginTop: 20}} >
                <Story name="Kenangan 1"/>
                <Story name="Kenangan 2"/>
                <Story name="Kenangan 3"/>
                <Story name="Kenangan 4"/>
                </View>
            </ScrollView>
        </View>
    )
}

export default PropsDynamic

const styles = StyleSheet.create({})
