import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchContacts } from '@/utility/api'
import { router } from 'expo-router'

const Index = () => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const result = await fetchContacts()
      if (result) setData(result)
      setLoading(false)
    }
    getData()
  }, [])

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={{ marginTop: 12 }}>Đang tải dữ liệu...</Text>
      </View>
    )
  }

  const viewProfile = async (item: any) => {
      router.push({
          pathname: '/userLab2/user',
          params: {
              user: JSON.stringify(item) 
          }
      })
  }

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => viewProfile(item)}>
            <Image
              source={{ uri: item.picture }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{item.name}</Text>
              <Text>{item.phone}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 8,
    gap: 20
  },
  text: {
    fontSize: 18
  },
  textContainer: {},
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
