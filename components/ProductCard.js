//Tên: Trần Minh Huy
//MSSV: 21522168
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';

export default function ProductCard({ item }) {
  const navigation = useNavigation();
  const { cart, addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    const isProductInCart = cart.some(product => product.id === item.id);
    
    if (isProductInCart) {
      Alert.alert('Thông báo', 'Sản phẩm đã có trong giỏ hàng.');
    } else {
      addToCart(item);
      Alert.alert('Thành công', 'Đã thêm sản phẩm vào giỏ hàng.');
    }
  };
  
  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text numberOfLines={2} style={styles.productName}>{item.title}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 6}}>
        <Text>{item.rating.rate}</Text>
        <Icon style={{marginHorizontal: 2}} name="star" size={16} color="#ffcc33" />
        <Text>({item.rating.count})</Text>
      </View>
      <TouchableOpacity style={styles.addButon} onPress={handleAddToCart}>
        <Icon name="add" size={26} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  productCard: { 
    flex: 1, 
    margin: 4, 
    position: 'relative',
    backgroundColor: '#fff', 
    padding: 16, 
    borderRadius: 10 
  },
  addButon: {
    backgroundColor: '#003399', 
    width: 26, 
    position: 'absolute',
    right: "10%",
    top: "93%",
    borderRadius: "50%"
  },
  productImage: { 
    width: "100%",
    height: 160,
    borderRadius: 8 
  },
  productName: { 
    fontSize: 16,
    marginTop: 8 
  },
  productPrice: { 
    fontSize: 14, 
    color: '#bb0000', 
    marginTop: 4,
    fontWeight: 'bold'
  },
});