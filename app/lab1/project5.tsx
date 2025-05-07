import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomSquare from '@/components/common/CustomSquare'

const project5 = () => {
  return (
    <View style={styles.container}>
      <CustomSquare text='Hà Nội' color='red' width={100}/>
      <CustomSquare text='Đà Nẵng' color='blue' width={100}/>
      <CustomSquare text='Hồ Chí Minh' color='green' width={100}/>
    </View>
  )
}

export default project5

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
})