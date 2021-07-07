import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const Button = ({submitTodo}) => {

    return (
        <View style={StyleSheet.buttonContainer}>
            <TouchableHighlight
                underlayColor='#efefef'
                style={StyleSheet.button}
                onPress={submitTodo}
            >

                <Text style={styles.submit}> Submit </Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignment: 'flex-end'
    },
    button: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        width: 200,
        marginRight: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        color: '#ffffff',
        fontWeight: '600',
        backgroundColor:'green',
        fontSize: '30',
        width:'80px',
        height:'40px',
        textAlign:'center',
        border:'1px solid yellow',
        borderRadius:'20px',
        padding:'10px',
        marginTop:'15px',
        marginLeft:'25px'
    }

})

export default Button