//Tên: Trần Minh Huy
//MSSV: 21522168
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Cate1 from './Cate1';
import Cate2 from './Cate2';
import Cate3 from './Cate3';

const Tab = createMaterialTopTabNavigator();

export default function Categories() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Categories1" component={Cate1} />
      <Tab.Screen name="Categories2" component={Cate2} />
      <Tab.Screen name="Categories3" component={Cate3} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});