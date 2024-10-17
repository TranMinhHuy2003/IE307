//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from './AuthContext';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image style={styles.logo_image} source={require('../../assets/images/logo.png')} />
      <Text style={styles.heading}>Welcome</Text>
      <View style={styles.inputBox}>
        <Icon style={styles.inputIcon} name="envelope" size="17" />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />
      </View>
      <View style={styles.inputBox}>
        <Icon style={styles.inputIcon} name="lock" size="22" />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <Text style={{textAlign: 'right', marginBottom: 20, color: 'red', marginTop: -10}}>Forgot password?</Text>
      <Button title="Login" onPress={() => login(email, password)} />
      <Text style={{fontSize: 18, fontWeight: 'bold', marginHorizontal: 'auto', marginVertical: 20}}>Or login with</Text>
      <View style={styles.socialIcon}>
        <Image style={{width: 65, height: 65, marginRight: 10}} source={require('../../assets/images/fb.webp')} />
        <Image style={{width: 50, height: 50}} source={require('../../assets/images/gg.png')} />
      </View>
      <Text style={{marginHorizontal: 'auto', marginTop: 10}}>
        Don't have an account?
        <Text style={styles.link} onPress={() => navigation.navigate('Register')}> Register</Text>
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
  socialIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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