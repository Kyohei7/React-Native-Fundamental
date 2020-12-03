import React, {Component, useState} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

// Use Functional Component
const Counter = () => {

    const [number, setNumber] = useState(0)

    return(
        <View>
            <Text style={{fontSize: 30, textAlign: 'center'}} >{number}</Text>
            <Button title= "Add" onPress={() => setNumber(number + 1)} />
            <Button title= "Reset" onPress={() => setNumber(0)} />
        </View>
    )
}


// Use Class Component
class ClassCounter extends Component {

    state = {
        number: 0
    }

    render() {
        return(
            <View>
                <Text style={{fontSize: 30, textAlign: 'center'}} >{this.state.number}</Text>
                <Button title= "Add" onPress={() => this.setState({number: this.state.number + 1})} />
                <Button title= "Reset" onPress={() => this.setState({number: this.state.number = 0})} />
            </View>
        )
    }
}

const StateDynamic = () => {
    return(
        <View style={styles.wrapper} >
            <Text style={styles.textTittle} >Component Dynamic with State</Text>
            <Text style={styles.textTittle} >Functional Component</Text>
            <Counter />
            <Text style={styles.textTittle} >Class Component</Text>
            <ClassCounter />
        </View>
    )
}

export default StateDynamic

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