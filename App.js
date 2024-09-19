import  {useState} from 'react';
import {
  FlatList,
  Modal,
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image
} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  const [hoten, ganhoten]=useState('');
  const capnhat=(tt)=>{
    ganhoten(tt);
  }
  return (
    <View style={styles.container}>
      <SignUp capnhatthongtin={capnhat}/>
      <Login ht={hoten}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },

});

export default App;