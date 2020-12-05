import React from 'react'
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

    return(
        <ScrollView style={styles.wrapper} >
            <Text style={styles.textTittle} >Simple Todo List</Text>
            <View style={{marginTop: 20}} >
                <TextInput placeholder="Nama Kegiatan" style={styles.input} />
                <TextInput placeholder="Jam Kegiatan" style={styles.input} />
                <TextInput placeholder="Keterangan Kegiatan" style={styles.input} />
                <Button title="Simpan" />
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