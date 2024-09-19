import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'

export default function SignUp({capnhatthongtin}) {
  const [thongtin,ganthongtin]=useState('')
  const Thaydoi=()=>{
    capnhatthongtin(thongtin);
  }
  return (
    <View>
      <Text style={styles.heading}>Đăng ký</Text>
      <View style={styles.inputBlock}>
        <Text>Ho ten: </Text>
        <TextInput value={thongtin} onChangeText={ganthongtin} style = {styles.textInput}></TextInput>
      </View>
      <Button title='Đăng Ký' onPress={Thaydoi} style={styles.button}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputBlock: {
    marginLeft: 80
  },
  heading: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 200,
    padding: 10
  },
  button: {
    fontSize: 12
  }
});