import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Calycutator = () => {
  const buttonLeft = [
    ['C', 'DEL'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+']
  ]

  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [saveTemp, setSaveTemp] = useState('')
  const [ketqua, setKetqua] = useState('')

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme')
      if (savedTheme) setTheme(savedTheme as 'light' | 'dark')
    }
    loadTheme()
  }, [])

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    await AsyncStorage.setItem('theme', newTheme)
  }

  const isDark = theme === 'dark'

  // Xử lý nhấn các nút
  const clickButton = (btn: string) => {
    if (['+', '-', '*', '/', '=', 'C', 'DEL'].includes(btn)) {
      Vibration.vibrate(50)
    }

    if (btn === 'C') {
      setSaveTemp('')
    } else if (btn === 'DEL') {
      setSaveTemp(saveTemp.slice(0, -1))
    } else if (btn === '=') {
      try {
        const result = eval(saveTemp)
        setKetqua(result.toString()) 
        setSaveTemp('')
      } catch (error) {
        setKetqua('Error') 
      }
    } else {
      setSaveTemp(saveTemp + btn)
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#f2f2f3' }]}>
      <View style={styles.top}>
        <TouchableOpacity onPress={toggleTheme}>
          <Ionicons
            name={isDark ? "sunny" : "moon"}
            size={28}
            color={isDark ? "#fff" : "#000"}
            style={{ padding: 10 }}
          />
        </TouchableOpacity>
        <View style={styles.resultContainer}>
            <Text style={[styles.saveTemp, { color: isDark ? '#fff' : '#000' }]}>
                {saveTemp || '0'}
            </Text>
            <Text style={[styles.result, { color: isDark ? '#fc597a' : 'blue' }]}>
                {ketqua || '0'}
            </Text>
        </View>
      </View>

      <View style={[styles.bottom, { backgroundColor: isDark ? '#333' : '#fc597a' }]}>
        {buttonLeft.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn, btnIndex) => (
              <TouchableOpacity
                key={btnIndex}
                onPress={() => clickButton(btn)}
                style={[styles.button, { backgroundColor: isDark ? '#555' : '#fff' }]}
              >
                <Text
                  style={[styles.buttonText, { color: isDark ? '#fff' : '#333' }]}
                >
                  {btn}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  )
}

export default Calycutator

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 10,
    position: 'relative',
  },
  resultContainer: {
    position: 'absolute', 
    bottom: 10, 
    width: '100%',
    alignItems: 'flex-end',
  },
  result: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  bottom: {
    flex: 2,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 18,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  saveTemp: {
    fontSize: 30,
    marginBottom: 10,
  }
})
