//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Bai1 from './components/Bai1/Bai_1';
import Bai_2 from './components/Bai2/Bai_2';
import Bai3 from './components/Bai3/Bai3';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Bai1/> */}
      <Bai_2/>
      {/* <Bai3/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
