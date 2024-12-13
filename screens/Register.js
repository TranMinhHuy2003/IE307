//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

export default function Register({ navigation }) {
  const [form, setForm] = useState({ username: '', password: '', email: '' });
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegister = async () => {
    if (!form.username || !form.password || !form.email) {
      Alert.alert('Error', 'Please fill all the fields');
      return;
    }
    if (!validateEmail(form.email)) {
      Alert.alert('Error', 'Email is invalid');
      return;
    }
    if (form.password !== confirmPassword) {
      Alert.alert('Error', 'Password and confirm password do not match');
      return;
    }
    try {
      const response = await axios.post('https://fakestoreapi.com/users', form);
      Alert.alert('Success', 'Account created successfully');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Registration failed. Try again!');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Register</Text>
      {['username', 'password', 'email'].map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          secureTextEntry={field === 'password'}
          onChangeText={(value) => setForm({ ...form, [field]: value })}
        />
      ))}
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text style={{marginHorizontal: 'auto', marginTop: 10}}>
        <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Already have an account? Login</Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 220,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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