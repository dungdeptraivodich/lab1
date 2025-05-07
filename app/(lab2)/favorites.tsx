import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchContacts } from '@/utility/api'
import { router } from 'expo-router'

const favorites = () => {
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
    <FlatList   
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity style={styles.container} onPress={() =>viewProfile(item)}>
                <Image
                    source={{ uri: item.picture }}
                    style={{ width: 100, height: 100, borderRadius: 100 }}
                />
            </TouchableOpacity>
        )}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        style={{
            // gap: 20
        }}
    />
  )
}

export default favorites

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        margin: 10
    }
})