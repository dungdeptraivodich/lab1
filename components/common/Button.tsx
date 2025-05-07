import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
    onPress?: () => void
    title?: string
    styleButton?: object
    styleText?: object
}

const Button = ({onPress, title, styleButton, styleText}: Props) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.btn, styleButton]} onPress={onPress}>
            <Text style={[styleText]}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        maxHeight: 50,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 8,

    },
    btn: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#fc597a',
    }
})