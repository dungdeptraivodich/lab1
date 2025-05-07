import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

type Props = {
    value: string
    onChangeText: (text: string) => void
    placeholder?: string
    error?: boolean
}

const InputPass = ({value, onChangeText, placeholder, error }: Props) => {
    const [secureText, setSecureText] = useState(true)
    
  return (
    <>
        <Text style={styles.log}>{error? 'Vui lòng nhập mật khẩu' : ''}</Text>
        <View style={styles.container}>
            <Ionicons name="key" size={24} color="black" />
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureText}
                autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.icon}>
                <Ionicons name={secureText ? 'eye-outline' : 'eye-off-outline'} size={24} color="#888" />
            </TouchableOpacity>
        </View>
    </>
  )
}

export default InputPass

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
    },
    icon: {
        padding: 10,
    }
})