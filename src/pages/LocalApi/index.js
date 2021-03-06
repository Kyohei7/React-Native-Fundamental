import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, TouchableOpacity, Alert } from 'react-native'

const Item = ({ name, time, details, onPress, onDelete }) => {
    return(
        <View style={styles.itemContainer} >
                <TouchableOpacity onPress={onPress}>
                    <Image source={{uri: 'https://i.pravatar.cc/150'}} style={styles.avatar} />
                </TouchableOpacity>
                    <View style={styles.desc} >
                        <Text style={styles.descName}> {name} </Text>
                        <Text style={styles.descTime}> {time} </Text>
                        <Text style={styles.descDetails}> {details} </Text>
                    </View>
                <TouchableOpacity onPress={onDelete} >
                    <Text style={styles.delete} >Hapus</Text> 
                </TouchableOpacity>
  
            </View>
    )
}


const LocalApi = () => {

    const [name, setName] = useState("")
    const [time, setTime] = useState("")
    const [details, setDetails] = useState("")

    const [todos, setTodos] = useState([])
    const [button, setButton] = useState("Simpan")

    const [selectedTodos, setSelectedTodos] = useState({})

    // Aplikasi Pertama Kali muncul langsung GetData
    useEffect(() => {
        getData()
    }, [])

    
    const submit = () => {
        
        const data = { name, time, details }
        
        // Membuat Kondisi untuk method button nya
        // Post Data
        if(button === "Simpan") {
            Axios.post('http://10.0.2.2:3000/todos', data)
                .then(res => {
                    console.log('res: ', res)
                    setName("")
                    setTime("")
                    setDetails("")
                    getData()
            })
        } else if(button === "Update") {
            // Update Data
            Axios.put(`http://10.0.2.2:3000/todos/${selectedTodos.id}`, data)
                    .then(res => {
                        console.log('Update : ', res);
                        setName("")
                        setTime("")
                        setDetails("")
                        getData()
                        setButton("Simpan")
                    })
            }
        
    }  

    // Get Data
    const getData = () => {
        Axios.get('http://10.0.2.2:3000/todos')
            .then(res => {
                console.log('Res : ', res)
                setTodos(res.data)
            })
    }

    // Select Item Data
    const selectItem = (item) => {
        console.log('Selected Item : ', item)
        setSelectedTodos(item)
        setName(item.name)
        setTime(item.time)
        setDetails(item.details)
        setButton("Update")
    }

    // Delete Data
    const deleteItem = (item) => {
        console.log('Delete Item : ', item)
        Axios.delete(`http://10.0.2.2:3000/todos/${item.id}`)
            .then(res => {
                console.log('Res Delete : ', res)
                getData()
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
                <Button title={button} onPress={submit} />
            </View>
                {todos.map(todo => {
                    return <Item 
                                key={todo.id} 
                                name={todo.name} 
                                time={todo.time} 
                                details={todo.details} 
                                onPress={() => selectItem(todo)} 
                                onDelete={() => Alert.alert(
                                    'Warning', 
                                    'Are You Sure ?', 
                                    [
                                        {
                                            text: 'No', 
                                            onPress: () => console.log('Button No')
                                        }, 
                                        {
                                            text: 'Yes', onPress: () => deleteItem(todo)
                                        }
                                    ])} />
                })}
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