//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
import { UserContext } from './UserContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchCart = async () => {
    if (user?.id) {
      try {
        const response = await axios.get(`https://fakestoreapi.com/carts/user/${user.id}`);
        const cartTemp = response.data[0] || [];
        if (cartTemp.products?.length > 0) {
          const productDetails = await Promise.all(
            cartTemp.products.map(async (item) => {
              const productResponse = await axios.get(`https://fakestoreapi.com/products/${item.productId}`);
              return { ...productResponse.data, quantity: item.quantity };
            })
          );
          setCart(productDetails);
          calculateTotal(productDetails);
        }
      } catch (error) {
        console.error('Failed to load cart data:', error);
      }
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchCart();
    }
  }, [user?.id]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, { ...item, quantity: 1 }];
      calculateTotal(updatedCart);
      return updatedCart;
    });
  };

  const calculateTotal = (cartItems) => {
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  const updateQuantity = (productId, operation) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        const updatedQuantity = operation === 'increase' ? item.quantity + 1 : item.quantity - 1;
        if (updatedQuantity <= 0) {
          setSelectedProduct(item);
          setModalVisible(true);
          return item;
        }
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  const confirmDelete = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const deleteProduct = async () => {
    try {
      const updatedCart = cart.filter((item) => item.id !== selectedProduct.id);
      if (updatedCart.length === 0) {
        await axios.delete(`https://fakestoreapi.com/carts/${user.id}`);
        setCart([]);
        setTotal(0);
        Alert.alert('Success', 'Cart has been deleted.');
      } else {
        const updatedProducts = updatedCart.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
        }));

        await axios.put(`https://fakestoreapi.com/carts/${user.id}`, {
          userId: user.id,
          date: new Date().toISOString().split('T')[0],
          products: updatedProducts,
        });

        setCart(updatedCart);
        calculateTotal(updatedCart);
        Alert.alert('Success', 'Product has been removed from the cart.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to update the cart. Please try again.');
    } finally {
      setModalVisible(false);
    }
  };

  return (
    <CartContext.Provider value={{ cart, total, addToCart, updateQuantity, confirmDelete, deleteProduct, modalVisible, setModalVisible }}>
      {children}
    </CartContext.Provider>
  );
};
