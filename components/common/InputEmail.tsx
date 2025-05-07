import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

type Props = {
    value: string
    onChangeText: (text: string) => void
    placeholder?: string
    error?: string
}

const InputEmail = ({value, onChangeText, placeholder, error }: Props) => {
  return (
    <>
        <Text style={styles.log}>{error ? error : ''}</Text>
        <View style={styles.container}>
            <Ionicons name="mail-outline" size={24} color="black" />
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                keyboardType="email-address"
                autoCapitalize="none"
            />
        </View>
    </>
  )
}

export default InputEmail

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        gap: 10,
        backgroundColor: '#f2f2f3',
        paddingHorizontal: 14,
        paddingVertical: 5,
        borderRadius: 8,
    },
    input: {
        flex: 1,
    },
    log: {
        color: 'red',
        fontSize: 12,
        marginVertical: 5,
        fontWeight: 'bold',
    }
})