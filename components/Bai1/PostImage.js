//Tên: Trần Minh Huy
//MSSV: 21522168
import { Image, View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function PostImage({ image }) {
  return image ? <Image source={image} style={styles.postImage} /> : null;
}

const styles = StyleSheet.create({
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
});