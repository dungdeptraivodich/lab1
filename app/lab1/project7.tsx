import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'

const project7 = () => {
    const [name, setName] = useState('')
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Vui lòng nhập tên</Text>
        <Input placeholder='Nhập tên của bạn' value={name} onChangeText={setName}/>
        <Button title='Xác nhận' onPress={() => {alert(`Xin chào ${name}`); setName('')}}/>
    </View>

  )
}

export default project7

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },

    text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    }
})