//Tên: Trần Minh Huy
//MSSV: 21522168
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Bai1 from './components/Bai_1';
import Bai_2 from './components/Bai_2';

const App = () => {
  return (
    <View style={styles.container}>
      <Bai1/>
      {/* <Bai_2/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
