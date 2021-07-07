import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'

const Input = ({ inputValue, inputChange}) => {
    return(
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={inputValue}
                placeholder='What to do tomorrow?'
                placehourerTextColor='#CACACA'
                selectionColor="#666"
                onChangeText={inputChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: .2,
        shadowRadius: 6,
        shadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 } 
    },
    input: {
        height: 60,
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default Input