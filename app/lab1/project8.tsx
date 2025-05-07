import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native'
import React from 'react'
import data from '@/lib/data.json'

type Name = {
  ho: string;
  ten_dem: string;
  ten: string;
};

type ItemType = {
  name: Name;
};

const Project8 = () => {
  const renderItem: ListRenderItem<ItemType> = ({ item }) => {
    const { ho, ten_dem, ten } = item.name;
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{ho} {ten_dem !== '' && ten_dem} {ten}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách tên</Text>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  )
}

export default Project8

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 40
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12
  },
  item: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 8
  },
  text: {
    fontSize: 18
  }
})
