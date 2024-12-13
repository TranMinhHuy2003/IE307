//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductCard from '../components/ProductCard';

const categoryIcons = {
  All: 'apps',
  "men's clothing": 'tshirt-crew',
  "women's clothing": 'hanger',
  "jewelery": 'diamond-stone',
  "electronics": 'laptop',
};

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const data = response.data;
      setProducts(data);
      const uniqueCategories = ['All', ...new Set(data.map((p) => p.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={ styles.categoryItem }
      onPress={() => setSelectedCategory(item)}
    >
      <Icon 
        name={categoryIcons[item]} 
        size={38} 
        color="#555" 
        style={[styles.icon, selectedCategory === item && styles.selectedCategoryIcon]} 
      />
      <Text style={[styles.categoryText, selectedCategory === item && styles.selectedCategoryText]}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading ? (
          <ActivityIndicator size="large" color="#000" />
      ) : (
        <View style={{flex: 1}}>
          <FlatList
            data={categories}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderCategoryItem}
            style={styles.categoryList}
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <ProductCard
              item={item}
            />
            )}
            numColumns={2}
            contentContainerStyle={styles.productList}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  categoryList: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  categoryItem: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center'
  },
  categoryText: {
    color: '#000',
    fontSize: 16,
  },
  selectedCategoryText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: 'bold'
  },
  icon: {
    marginBottom: 4
  },
  selectedCategoryIcon: {
    color: '#2196F3'
  },
  productList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

export default Categories;
