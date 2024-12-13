//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useEffect } from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: `${product.title}`,
    });
  }, [product.name, navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.title}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.rating}>Rating: {product.rating.rate}⭐ ({product.rating.count} reviews)</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  price: {
    fontSize: 18,
    color: '#f57c00',
    marginTop: 8,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    lineHeight: 22,
  },
  rating: {
    fontSize: 16,
    marginTop: 8,
    fontStyle: 'italic',
    color: '#555',
  },
});
