import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from '@/components/common/Button'

const project4 = () => {
    const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
        <Text style={styles.textCount}>Số hiện tại là: {count}</Text>
        <Button title={`Thêm 1 đơn vị cho số ${count}`} onPress={() => setCount(count + 1)} styleButton={styles.button} styleText={styles.text}/>
    </View>
  )
}

export default project4

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

    textCount: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    }
})