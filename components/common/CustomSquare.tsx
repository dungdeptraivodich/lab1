import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    text: string
    color: string
    styleSquare?: object
    width?: number
    height?: number
}

const CustomSquare = ({text, color, styleSquare, width, height}: Props) => {
  return (
    <View style={[styles.container, {backgroundColor: color}, styleSquare, {width: width, height: height || 100}]}>
      <Text>{text}</Text>
    </View>
  )
}

export default CustomSquare

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})