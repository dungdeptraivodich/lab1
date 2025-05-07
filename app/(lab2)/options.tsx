import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const options = () => {
  const button = [
    "Update Profile",
    "Chọn ngôn ngữ",
    "Sign Up"
  ]
  return (
    <View style={{marginTop: 10}}>
      {button.map((item, index) => (
        <TouchableOpacity key={index} style={styles.btn}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
        ))}
    </View>
  )
}

export default options

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 15,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3'
  },
  text: {
    fontWeight: 'bold',
  }
})