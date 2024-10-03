//Tên: Trần Minh Huy
//MSSV: 21522168
import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function UserInfo({ avatar, username }) {
  return (
    <View style={styles.userInfo}>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.username}>{username}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});