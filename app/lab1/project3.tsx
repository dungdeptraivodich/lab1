import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Button from '@/components/common/Button'

const project3 = () => {

  return (
    <View style={styles.container}>
      <Button title='Xin chào' onPress={() => alert("Tạm biệt")} styleButton={styles.button} styleText={styles.text}/>
    </View>
  )
}

export default project3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },

    button: {
        backgroundColor: 'blue',
    },

    text: {
        color: 'white',
        fontSize: 16,
    },

})