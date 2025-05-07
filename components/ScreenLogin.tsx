import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground, Alert } from 'react-native';

const ScreenLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const click_login = () => {
        Alert.alert('Login', `Tài khoản: ${username}\nMật khẩu: ${password}`);
    }

  return (
    <ImageBackground
      source={require('@/assets/images/brg.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
            source={require('@/assets/images/pkm.jpg')} 
            style={styles.logo}
            resizeMode="cover"
        />
        <TouchableOpacity style={styles.registerBtn}>
            <Text style={styles.registerText}>REGISTER</Text>
        </TouchableOpacity>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <TextInput style={styles.input} 
                placeholder="USERNAME" 
                value={username}
                onChangeText={setUsername}  />
            <TextInput style={styles.input} 
                placeholder="PASSWORD" 
                value={password}
                onChangeText={setPassword}
                secureTextEntry />
          </View>

          <TouchableOpacity style={styles.loginBtn} onPress={click_login}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#aaa',
    paddingVertical: 10,
    marginBottom: 10,
  },
  loginBtn: {
    backgroundColor: '#c94d4d',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerBtn: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  registerText: {
    color: '#444',
    fontStyle: 'italic',
  },
});

export default ScreenLogin;
