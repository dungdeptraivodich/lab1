import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import InputEmail from '@/components/common/InputEmail'
import InputPass from '@/components/common/InputPass'
import Button from '@/components/common/Button'
import Link from '@/components/common/Link'
import { router } from 'expo-router'

const login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errorEmail, setErrorEmail] = useState<string>('')
    const [errorPass, setErrorPass] = useState<boolean>(false)

    const click = () => {
        if (email === '') {
            setErrorEmail('Vui lòng nhập email')
        }else if (!email.includes('@')) {
            setErrorEmail('Email không hợp lệ')
        }else {
            setErrorEmail('')
        }
        if (password === '') {
            setErrorPass(true)
        }
        if (password !== '') {
            setErrorPass(false)
        }
    }


  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.logo}
        resizeMode="cover" />
        <Text style={styles.title}>Welcome Back!</Text>
        <InputEmail value={email} onChangeText={setEmail} placeholder='Email enter' error={errorEmail}/>
        <InputPass value={password} onChangeText={setPassword} placeholder='Password enter' error={errorPass}/>
        <Button title='Login' onPress={click}/>
        <Link title='Create a new account?' onPress={() => router.push('/bai2/createAccount')}/>
        <Link title='Reset password?' onPress={() => router.push('/bai2/resetPass')}/>
    </View>
  )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 50,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'serif',
    }
})