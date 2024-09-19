import { View, Text,TextInput, Button,StyleSheet } from 'react-native'
import { useState } from 'react';

export default function Dangky({capnhatthongtin}) {
  const [thongtin, ganthongtin]=useState('')
  const Thaydoi=()=>{
      capnhatthongtin(thongtin);
  }
  return (
    <View >
      <Text>Họ Tên</Text>
      <TextInput 
      style={{backgroundColor:"yellow",height:30}}
      value={thongtin}
      onChangeText={ganthongtin}
      >
      </TextInput>
      <Button title='Đăng Ký' onPress={Thaydoi}/>

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });