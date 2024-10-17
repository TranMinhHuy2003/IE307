//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      setError('Vui lòng điền đầy đủ thông tin.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Email không hợp lệ.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Mật khẩu và xác nhận mật khẩu không khớp.');
      return;
    }
    setError('');
    alert('Đăng ký thành công!');
    
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo_image} source={require('../../assets/images/logo.png')} />
      <Text style={styles.heading}>Create New Account</Text>
      <View style={styles.inputBox}>
        <Icon style={styles.inputIcon} name="user" size="22" />  
        <TextInput
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
      </View>
      <View style={styles.inputBox}>
        <Icon style={styles.inputIcon} name="envelope" size="17" />
        <TextInput
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />
      </View>
      <View style={styles.inputBox}>
        <Icon style={styles.inputIcon} name="lock" size="22" />
        <TextInput
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.inputBox}>
        <Icon style={styles.inputIcon} name="lock" size="22" />
        <TextInput
          placeholder="Confirm password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Register" onPress={handleRegister} />
      <Text style={{marginHorizontal: 'auto', marginTop: 10}}>
        Already have an account? 
        <Text onPress={() => navigation.navigate('Login')} style={styles.link}> Login</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center',
    padding: 16
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    height: 60,
    marginBottom: 15
  },
  input: { 
    flex: 1, 
    marginBottom: 12,
    paddingTop: 10,
    borderRadius: 10,
  },
  inputIcon: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  error: {
    color: 'red',
    marginBottom: 12
  },
  link: {
    color: 'blue',
    marginTop: 16
  },
  logo_image: {
    borderRadius: "100%",
    width: 120,
    height: 120,
    marginHorizontal: 'auto',
    marginBottom: 30,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 'auto',
    marginBottom: 30
  }
});