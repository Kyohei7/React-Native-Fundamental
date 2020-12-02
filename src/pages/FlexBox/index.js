import React, {Component, useEffect, useState} from 'react'
import { Image, Text, View } from 'react-native';
import macbook from '../../../src/assets/image/macbook.jpg'

// class FlexBox extends Component {
//     

// LifeCycle Class Component :
        
//         // Mounting (Ketika Muncul) :  
//         //   - Constructor (method yang dipanggil saat komponen akan muncul)
//         //   - Render (method kedua yang dipanggil saat komponen akan muncul)
//         //   - Component did Mount (method ketiga yang dipanggil saat komponen akan muncul)
        
//         // Updatting (Ketika Berubah) :
//         //   - Render
//         //   - Component did update
        
//         // Unmounting (Ketika Hilang ) -> Component will Unmount
    
    
//     constructor(props) { // Proses Pertama Mounting
//         super(props)
//         console.log(' ------> Constructor');
//         this.state = {
//             follower: 5000,
//         }
//     }

//     componentDidMount() { // Proses Ketiga  Mounting
//         console.log(' ------> Component did mount');
//         setTimeout(() => {
//             this.setState({
//                 follower: '5 Juta',
//             })
//         }, 5000)
//     }

//     componentDidUpdate() { // Proses ini akan muncul bila ada proses Update di componentdidmount
//         console.log('-------> Component did Update');
//     }

//     componentWillUnmount() {
//         console.log('--------> Component will unmount');
//     }

//     render() { // // Proses Kedua Mounting & Updating
//         console.log(' ------> Render');
//         return(
//             <View>
//                 <View style={{
//                 flexDirection: 'row', 
//                 alignItems: 'center',
//                 justifyContent: 'space-between'
//                 }}>
//                     <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
//                     <View style={{backgroundColor: 'green', width: 50, height: 50}} />
//                     <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
//                     <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
//                 </View>
//                 <View style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-around',
//                     alignItems: 'center',
//                     marginTop: 30
//                     }}>
//                     <Text>Home</Text>
//                     <Text>Search</Text>
//                     <Text>Offers</Text>
//                     <Text>Profile</Text>
//                 </View>
//                 <View style={{
//                     flexDirection: 'row', 
//                     alignItems: 'center', 
//                     marginTop: 30,
//                     justifyContent: 'center'
//                     }} >
//                     <Image source={macbook}
//                         style={{
//                             width: 100, 
//                             height: 100, 
//                             borderRadius: 50,
//                             marginRight: 14
//                             }} />
//                     <View>
//                         <Text style={{fontSize: 20, fontWeight: 'bold'}} >Muhammad Rizki</Text>
//                         <Text> {this.state.follower} Followers</Text>
//                     </View>
//                 </View>
//             </View> 
//         )
//     }
// }


// Functional Component Lifecycle (Hooks) -> Methodnya : useEffect()
const FlexBox = () => {

    // Untuk melakukan berubahan menggunakan useState
    const [follower, setFollower] = useState(200)

    useEffect(() => {
        console.log('did mount');
        setTimeout(() => {
            setFollower('10 Juta')
        }, 2000)
        return() => {
            console.log('did update');
        }
    }, [follower])
    
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
                        <Text> {follower} Followers</Text>
                    </View>
                </View>
        </View> 
    )
}


export default FlexBox