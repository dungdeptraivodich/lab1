import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
    onPress?: () => void
    title?: string
}

const Link = ({onPress, title}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Link

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 7,
        borderRadius: 8,
    },
    text: {
        color: '#0000ee',
    }
})