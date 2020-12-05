import Axios from 'axios'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native'

const Item = () => {
    return(
        <View style={styles.itemContainer} >
                <Image source={{uri: 'https://i.pravatar.cc/150'}} style={styles.avatar} />
                    <View style={styles.desc} >
                        <Text style={styles.descName}> Bangun Pagi </Text>
                        <Text style={styles.descTime}> 03.30 WIB </Text>
                        <Text style={styles.descDetails}> Bangun pagi lebih awal </Text>
                    </View>
                    <Text style={styles.delete} >Hapus</Text> 
            </View>
    )
}


const LocalApi = () => {

    const [name, setName] = useState("")
    const [time, setTime] = useState("")
    const [details, setDetails] = useState("")
    
    const submit = () => {
        const data = {
            name,
            time,
            details
        }
        console.log('Data Sebelum di Set ', data)
        Axios.post('http://10.0.2.2:3000/todos', data)
            .then(res => {
                console.log('res: ', res)
                setName("")
                setTime("")
                setDetails("")
            })
    }  

    return(
        <ScrollView style={styles.wrapper} >
            <Text style={styles.textTittle} >Simple Todo List</Text>
            <View style={{marginTop: 20}} >
                <TextInput 
                    placeholder="Nama" 
                    style={styles.input} 
                    value={name} 
                    onChangeText={(value) => setName(value)} />
                <TextInput 
                    placeholder="Jam" 
                    style={styles.input} 
                    value={time} 
                    onChangeText={(value) => setTime(value)} />
                <TextInput 
                    placeholder="Keterangan" 
                    style={styles.input} 
                    value={details} 
                    onChangeText={(value) => setDetails(value)} />
                <Button title="Simpan" onPress={submit} />
            </View>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
        </ScrollView>
    )
}

export default LocalApi

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        
    },
    textTittle: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 25
    },
    input: {
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 15,
        paddingHorizontal: 10
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    itemContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    },
    desc: {
        marginLeft: 20,
        flex: 1
    },
    descName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    descTime: {
        fontSize: 16,
        marginTop: 5
    },
    descDetails: {
        fontSize: 12,
        marginTop: 8 
    },
    delete: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red'
    }
})