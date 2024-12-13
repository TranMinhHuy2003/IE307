//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Modal, Button, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

const Cart = ({ navigation }) => {
  const { cart, updateQuantity, confirmDelete, deleteProduct, total, modalVisible, setModalVisible } = useContext(CartContext);

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <View style={styles.details}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View>
          <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => updateQuantity(item.id, 'decrease')}>
              <Text style={styles.icon}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => updateQuantity(item.id, 'increase')}>
              <Text style={styles.icon}>+</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10, marginTop: -8}}>Total: ${(item.price*item.quantity).toFixed(2)}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => confirmDelete(item)}>
          <Text style={styles.delete}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text>Your cart is empty.</Text>
          <Button title="Shop Now" onPress={() => navigation.navigate('Home')} />
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <View style={styles.footer}>
            <Text style={styles.totalText}>Total Amount: ${total.toFixed(2)}</Text>
            <Button title="Checkout" onPress={() => {}} />
          </View>
        </>
      )}

      <Modal visible={modalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Are you sure you want to delete this product?</Text>
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button color={'#ff0000'} title="Confirm" onPress={deleteProduct} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16 
  },
  cartItem: { 
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16
  },
  productImage: { 
    width: 80, 
    height: 80,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: { 
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  productTitle: { 
    fontSize: 16, 
    fontWeight: 'bold',
    marginBottom: 10
  },
  productPrice: { 
    fontSize: 15,
    marginBottom: 10, 
    fontWeight: 'bold'
  },
  quantityContainer: { 
    flexDirection: 'row', 
  },
  icon: { 
    fontSize: 20, 
    marginHorizontal: 8 
  },
  quantity: { 
    fontSize: 16 
  },
  delete: { 
    color: 'red', 
    marginTop: 8,
    width: 20
  },
  footer: {  
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center' 
  },
  totalText: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  emptyCartContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  modalContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.5)' 
  },
  modalContent: { 
    backgroundColor: 'white', 
    padding: 20, 
    borderRadius: 8 
  },
  modalButtons: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 20 
  },
});

export default Cart;
