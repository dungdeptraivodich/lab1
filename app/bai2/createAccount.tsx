import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import InputEmail from '@/components/common/InputEmail'
import InputPass from '@/components/common/InputPass'
import Button from '@/components/common/Button'
import Link from '@/components/common/Link'
import { router } from 'expo-router'

const createAccount = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [errorConfirmPass, setErrorConfirmPass] = useState<boolean>(false)
    const [errorEmail, setErrorEmail] = useState<string>('')
    const [errorPass, setErrorPass] = useState<boolean>(false)

    const click = () => {
        if (password === '') {
            setErrorPass(true)
        }
        if (confirmPassword === '') {
            setErrorConfirmPass(true)
        }
        
        if (email === '') {
            setErrorEmail('Vui lòng nhập email')
        }else if (!email.includes('@')) {
            setErrorEmail('Email không hợp lệ')
        }else {
            setErrorEmail('')
        }

        if (password !== '') {
            setErrorPass(false)
        }
        if (confirmPassword !== '') {
            setErrorConfirmPass(false)
        }

        if (password == confirmPassword && email !== '' && password !== '' && confirmPassword !== '') {
            ToastAndroid.show('Create account successfully', ToastAndroid.SHORT)
        }

    }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Create a new account</Text>
        <InputEmail value={email} onChangeText={setEmail} placeholder='Email enter' error={errorEmail}/>
        <InputPass value={password} onChangeText={setPassword} placeholder='Password enter' error={errorPass}/>
        <InputPass value={confirmPassword} onChangeText={setConfirmPassword} placeholder='Confirm password enter' error={errorConfirmPass}/>
        <Button title='Create' onPress={click}/>
        <Link title='Already have an account?' onPress={() => router.push('/bai2/login')}/>
    </View>
  )
}

export default createAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'serif',
    }
})