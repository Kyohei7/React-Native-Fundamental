import React, {Component} from 'react'
import { Image, Text, View } from 'react-native';
import macbook from '../../../src/assets/image/macbook.jpg'

class FlexBox extends Component {
    render() {
        return(
            <View>
                <View style={{
                flexDirection: 'row', 
                alignItems: 'center',
                justifyContent: 'space-between'
                }}>
                    <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
                    <View style={{backgroundColor: 'green', width: 50, height: 50}} />
                    <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
                    <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: 30
                    }}>
                    <Text>Home</Text>
                    <Text>Search</Text>
                    <Text>Offers</Text>
                    <Text>Profile</Text>
                </View>
                <View style={{
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    marginTop: 30,
                    justifyContent: 'center'
                    }} >
                    <Image source={macbook}
                        style={{
                            width: 100, 
                            height: 100, 
                            borderRadius: 50,
                            marginRight: 14
                            }} />
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}} >Muhammad Rizki</Text>
                        <Text>Android Developer</Text>
                    </View>
                </View>
            </View> 
        )
    }
}

export default FlexBox