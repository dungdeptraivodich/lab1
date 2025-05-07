import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const project2 = () => {
  return (
    <View style={styles.container}>
        <Button title='Button click' onPress={() => alert('Hello world')}/> 
    </View>
  )
}

export default project2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    }
})