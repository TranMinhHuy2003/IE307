//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { banner } from '../banners';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const width = Dimensions.get('window').width;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderProduct = ({ item }) => (
    <ProductCard
      item={item}
    />
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <View style={{flex: 1}}>
          <FlatList
            data={products.slice(0, 6)}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={
              <>
                <Text style={styles.slogan}>Shopping and enjoy</Text>
                <Carousel
                  loop
                  width={width - 30}
                  height={200}
                  autoPlay={true}
                  data={banner}
                  scrollAnimationDuration={1000}
                  renderItem={({ item }) => (
                    <Image source={{ uri: item.banner_img }} style={styles.bannerImage} />
                  )}
                />
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 10}}>
                  <Text style={styles.sectionTitle}>Hot Deals</Text>
                  <Image source={{ uri: "https://cdn-icons-png.freepik.com/512/3687/3687943.png" }} style={{height: 25, width: 25}} />
                </View>
              </>
            }
            ListFooterComponent={
              <>
                <FlatList
                  data={products.slice(7, 13)}
                  numColumns={2}
                  keyExtractor={(item) => item.id.toString()}
                  ListHeaderComponent={
                    <>
                      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 10}}>
                        <Text style={styles.sectionTitle}>New Arrivals</Text>
                        <Image source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/014/500/439/small_2x/new-arrival-illustration-design-free-png.png" }} style={{height: 35, width: 35}} />
                      </View>
                    </>
                  }
                  renderItem={renderProduct}
                  contentContainerStyle={styles.productList}
                />
              </>
            }
            renderItem={renderProduct}
            contentContainerStyle={styles.productList}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    paddingHorizontal: 14,
    backgroundColor: '#f2f2f2'
  },
  slogan: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginVertical: 16,
    color: 'red',
    textAlign: 'center'
  },
  bannerImage: { 
    height: 200, 
    borderRadius: 10
  },
  sectionTitle: { 
    fontSize: 20, 
    color: '#cc0033',
    fontWeight: 'bold',
    fontSize: 24,
    marginRight: 6
  },
  productList: { 
    paddingBottom: 16 
  },
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
