import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const project1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
    </View>
  )
}

export default project1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'serif',
        color: 'blue',
    }
})