import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get("window");
import PagerView from '@react-native-community/viewpager';

const ViewPager = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageIndex2, setPageIndex2] = useState(0);

  const pagerViewRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* PagerDotIndicator */}
      <PagerView
        style={styles.pagerStyle}
        initialPage={0}
        onPageSelected={e => setPageIndex(e.nativeEvent.position)}
      >
        <View style={styles.background1} key="1">
          {/* <Text style={styles.textStyle}>One</Text> */}
          <Image source={{ uri: "https://magiamgiashopee.vn/wp-content/uploads/2020/04/Ch%C6%B0%C6%A1ng-tr%C3%ACnh-khuy%E1%BA%BFn-m%C3%A3i-Shopee-h%E1%BB%97-tr%E1%BB%A3-tr%C4%83m-t%E1%BB%B7.png" }} style={styles.advertisement} />
        </View>
        <View style={styles.background2} key="2">
          {/* <Text style={styles.textStyle}>Two</Text> */}
          <Image source={{ uri: "https://magiamgia.com/wp-content/uploads/2021/08/Shopee-20.8.jpg" }} style={styles.advertisement} />
        </View>
        <View style={styles.background3} key="3">
          {/* <Text style={styles.textStyle}>Three</Text> */}
          <Image source={{ uri: "https://thanhnien.mediacdn.vn/Uploaded/hongky-qc/2021_12_10/image1-8968.png" }} style={styles.advertisement} />
        </View>
      </PagerView>
      <View style={styles.indicatorContainer}>
        <View style={[styles.dot, pageIndex === 0 && styles.activeDot]} />
        <View style={[styles.dot, pageIndex === 1 && styles.activeDot]} />
        <View style={[styles.dot, pageIndex === 2 && styles.activeDot]} />
      </View>

      {/* PagerTabIndicator */}
      <PagerView
        ref={pagerViewRef} // Assign the ref here
        style={styles.pagerStyle}
        initialPage={0}
        onPageSelected={e => setPageIndex2(e.nativeEvent.position)}
      >
        <View style={styles.background1} key="1">
          <Text style={styles.textStyle}>Home</Text>
        </View>
        <View style={styles.background2} key="2">
          <Text style={styles.textStyle}>Message</Text>
        </View>
        <View style={styles.background3} key="3">
          <Text style={styles.textStyle}>Profile</Text>
        </View>
      </PagerView>
      <View style={styles.tabIndicator}>
        <TouchableOpacity
          onPress={() => {
            setPageIndex2(0);
            pagerViewRef.current.setPage(0);
          }}
          style={styles.tabContainer}
        >
          <Ionicons
            name={pageIndex2 === 0 ? "home" : "home-outline"}
            size={24}
            color={pageIndex2 === 0 ? 'black' : 'gray'}
          />
          <Text style={[styles.tab, pageIndex2 === 0 && styles.activeTab]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPageIndex2(1);
            pagerViewRef.current.setPage(1);
          }}
          style={styles.tabContainer}
        >
          <Ionicons
            name={pageIndex2 === 1 ? 'chatbubble' : "chatbubble-outline"}
            size={24}
            color={pageIndex2 === 1 ? 'black' : 'gray'}
          />
          <Text style={[styles.tab, pageIndex2 === 1 && styles.activeTab]}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPageIndex2(2);
            pagerViewRef.current.setPage(2);
          }}
          style={styles.tabContainer}
        >
          <Ionicons
            name={pageIndex2 === 2 ? 'person' : "person-outline"}
            size={24}
            color={pageIndex2 === 2 ? 'black' : 'gray'}
          />
          <Text style={[styles.tab, pageIndex2 === 2 && styles.activeTab]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ViewPager;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  background1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C70039',
  },
  background2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5733',
  },
  background3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC300',
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
  },
  pagerStyle: {
    backgroundColor: 'white',
    height: 200,
    width: '100%',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    margin: 5,
  },
  activeDot: {
    backgroundColor: 'black',
  },
  tabIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tab: {
    fontSize: 18,
    color: 'gray',
  },
  activeTab: {
    color: 'black',
    fontWeight: 'bold',
    borderBottomWidth: 3,
    borderBottomColor: 'blue',
    paddingBottom: 5,
  },
  advertisement: {
    width: width,
    height: width * 0.6,
  },
});
