//Tên: Trần Minh Huy
//MSSV: 21522168
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Bai1 from './components/Bai1/Bai1';
import Bai2 from './components/Bai2/Bai2'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Bai1/> */}
      <Bai2 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
