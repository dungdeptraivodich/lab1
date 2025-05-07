import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputEmail from '@/components/common/InputEmail'
import Button from '@/components/common/Button'
import Link from '@/components/common/Link'
import { router } from 'expo-router'

const resetPass = () => {
    const [email, setEmail] = useState<string>('')
    const [errorEmail, setErrorEmail] = useState<string>('')
    const click = () => {
        if (email === '') {
            setErrorEmail('Vui lòng nhập email')
        }else if (!email.includes('@')) {
            setErrorEmail('Email không hợp lệ')
        }else {
            setErrorEmail('')
        }
    }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Create a new account</Text>
        <InputEmail value={email} onChangeText={setEmail} placeholder='Email enter' error={errorEmail}/>
        <Button title='Reset Password' onPress={click}/>
        <Link title='Go back to Login?' onPress={() => router.push('/bai2/login')}/>
    </View>
  )
}

export default resetPass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        fontFamily: 'serif',
    }
})