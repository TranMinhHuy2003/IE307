//Tên: Trần Minh Huy
//MSSV: 21522168
import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

export default function Logo({ isDarkMode }) {
  return (
    <View>
      <Image style={styles.logo_image} source={require('../../assets/images/logo.png')} />
      <Text style={[styles.logo, isDarkMode ? styles.darkText : styles.lightText]}>
        React Native App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo_image: {
    borderRadius: "100%",
    width: 150,
    height: 150,
    margin: 'auto'
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
});
