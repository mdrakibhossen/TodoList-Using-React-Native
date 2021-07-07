import React from 'react'
import { View, StyleSheet } from 'react-native'
import TabBarItem from './TabBarItem'

const TabBar = ({ setType, type }) => (
    <View style={styles.container}>
        <TabBarItem type={type} title='ALL' setType={() => setType('All')}/>
        <TabBarItem type={type} border title='Activate' setType={() => setType('Activate')} />
        <TabBarItem type={type} border title='Complete' setType={() => setType('Complete')} />
    </View>
)

const styles = StyleSheet.create({
    container:{
        height: 50,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
        textAlign: 'center',
        backgroundColor:'green', 
        marginBottom: '1px',
        color: '#ffffff'
        
    }
})



export default TabBar