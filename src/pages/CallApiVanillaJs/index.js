import React, { useEffect } from 'react' 
import { StyleSheet, Text, View } from 'react-native'

const CallApiVanillaJs = () => {

    useEffect(() => {
        // Call Api method GET
        fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(json => console.log(json))

        // Call Api method POST
        const dataApi = {
            name: "Muhammad Rizki",
            job: "Mobile Developer"
        }

        console.log('Data Object: ', dataApi);
        console.log('Data Stringify: ', JSON.stringify(dataApi));

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataApi)
        })
            .then(response => response.json())
            .then(json => console.log('Post Response: ', json))
    }, [])

    return(
        <View style={styles.wrapper} >
            <Text style={styles.textTittle} >Call Api with Vanilla Javascript</Text>
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
})