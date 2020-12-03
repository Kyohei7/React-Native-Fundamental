import React, { useEffect, useState } from 'react' 
import { Button, Image, StyleSheet, Text, View } from 'react-native'

const CallApiVanillaJs = () => {

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


    useEffect(() => {
        // Call Api method GET
        // fetch('https://reqres.in/api/users?page=2')
        //     .then(response => response.json())
        //     .then(json => console.log(json))

        // Call Api method POST
        // const dataApi = {
        //     name: "Muhammad Rizki",
        //     job: "Mobile Developer"
        // }

        // console.log('Data Object: ', dataApi);
        // console.log('Data Stringify: ', JSON.stringify(dataApi));

        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(dataApi)
        // })
        //     .then(response => response.json())
        //     .then(json => console.log('Post Response: ', json))
    }, [])


    // Get Data Api
    const getDataApi = () => {
        fetch('https://reqres.in/api/users/2')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setDataUser(json.data)
            })
    }

    // Post Data Api
    const postDataApi = () => {
        const dataApi = {
            name: "Muhammad Rizki",
            job: "React Native Developer"
        }

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataApi)
        })
            .then(response => response.json())
            .then(json => {
                console.log('Post Response: ', json)
                setDataJob(json)
            })
    }



    return(
        <View style={styles.wrapper} >
            <Text style={styles.textTittle} >Call Api with Vanilla Javascript</Text>
            <Button title="GET DATA API" onPress={getDataApi} />
            <Text> Response Get Data Api</Text>
            <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
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

export default CallApiVanillaJs

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