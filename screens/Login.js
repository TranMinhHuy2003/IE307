//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import { UserContext } from '../context/UserContext';

export default function Login({ navigation }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const { login } = useContext(UserContext);

  async function handleLogin(form) {
    if (!form.username || !form.password) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }
    const user = await login(form.username, form.password);
    if (user == null) {
      Alert.alert('Login Failed', 'Incorrect email or password. Please try again.');
      return;
    }
    Alert.alert("Login successfully", `Welcome ${form.username}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {['username', 'password'].map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          secureTextEntry={field === 'password'}
          onChangeText={(value) => setForm({ ...form, [field]: value })}
        />
      ))}
      <Text style={{textAlign: 'right', marginBottom: 20, color: '#2196F3', marginTop: -10}}>Forgot password?</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleLogin(form)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 18, fontWeight: 'bold', marginHorizontal: 'auto', marginVertical: 20}}>Or login with</Text>
      <View style={styles.socialIcon}>
        <Image style={{width: 65, height: 65, marginRight: 10}} source={require('../assets/images/fb.webp')} />
        <Image style={{width: 50, height: 50}} source={require('../assets/images/gg.png')} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  socialIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#2196F3',
    marginTop: 15,
    textAlign: 'center',
  },
});