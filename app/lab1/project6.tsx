import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomSquare from '@/components/common/CustomSquare'

const project6 = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  return (
    <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false}>

        {data.map((item, index) => (
            <CustomSquare key={index} text={`Cường ${item}`} color={index % 2 === 0 ? '#e06af5' : '#666666'} styleSquare={styles.square}/>
        ))}
    </ScrollView>
  )
}

export default project6

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        gap: 20,
    },

    square: {
        flex: 1,
        margin: 10,
    }
})