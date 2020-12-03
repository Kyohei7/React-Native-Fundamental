import Axios from 'axios'
import React, { useEffect, useState } from 'react' 
import { Button, Image, StyleSheet, Text, View } from 'react-native'

const CallApiAxios = () => {

    // State Get Data Api
    const [dataUser, setDataUser] = useState({
        avatar: '',
        email: '',
        first_name: '',
        last_name: '',
    })

    // State Post Data Api
    const [dataJob, setDataJob] = useState({
        name: '',
        job: '',
    })

    // Get Data Api
    const getDataApi = () => {
        Axios.get('https://reqres.in/api/users/5')
            .then(result => {
                setDataUser(result.data.data)
            })
            .catch(err => console.log('Error: ', err))
    }

    // Post Data Api
    const postDataApi = () => {
        const dataApi = {
            name: "Muhammad Rizki",
            job: "Mobile App Developer"
        }

        Axios.post('https://reqres.in/api/users', dataApi)
            .then(result => {
                setDataJob(result.data)
            })
            .catch(err => console.log('Error: ', err))
    }

    return(
        <View style={styles.wrapper} >
            <Text style={styles.textTittle} >Call Api with Library Axios</Text>
            <Button title="GET DATA API" onPress={getDataApi} />
            <Text> Response Get Data Api</Text>
            
            {dataUser.avatar.length > 0 && (
                <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
            )}
            
            <Text> {`${dataUser.first_name} ${dataUser.last_name}`} </Text>
            <Text> {dataUser.email} </Text>
            <View style={styles.line} />
            <Button title="Post DATA API" onPress={postDataApi} />
            <Text> Response Post Data Api</Text>
            <Text> {dataJob.name} </Text>
            <Text> {dataJob.job} </Text>
        </View>
    )
}

export default CallApiAxios

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        
    },
    textTittle: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 20
    },
    line: {
        height: 2,
        backgroundColor: 'grey',
        marginVertical: 20
    },
    avatar: {
        width: 100, 
        height: 100, 
        borderRadius: 50
    }
    
})