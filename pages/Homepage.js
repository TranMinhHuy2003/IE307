import { View, Text } from 'react-native'
import React from 'react'
import PageLoaihoa from './Page1';
import PageHoa from './Page2';
import PageCtHoa from './Page3';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function Homepage() {
  return (
    <Stack.Navigator initialRouteName="PageLoaihoa">
    <Stack.Screen
      name="PageLoaihoa"
      component={PageLoaihoa}
      options={{
      title: 'Loại Hoa', //Set Header Title
      headerStyle: {
        backgroundColor: '#f78a68', //Set Header color
      },
      headerTintColor: '#fff', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      },
      }}
    />
    <Stack.Screen
        name="PageHoa"
        component={PageHoa}
        options={{
        title: 'Danh Sách', //Set Header Title
        headerStyle: {
            backgroundColor: '#f78a68', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
        },
        }}
    />
    <Stack.Screen
        name="PageCtHoa"
        component={PageCtHoa}
        options={{
        title: 'Trang Chi Tiết', //Set Header Title
        headerStyle: {
            backgroundColor: '#f78a68', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
        },
        }}
    />
    </Stack.Navigator>
  )
}