//Tên: Trần Minh Huy
//MSSV: 21522168
import React from 'react';
import { StyleSheet } from 'react-native';
import MainNavigator from './navigation/MainNavigator';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <MainNavigator />
      </CartProvider>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
