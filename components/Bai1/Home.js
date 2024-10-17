//Tên: Trần Minh Huy
//MSSV: 21522168
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

function HomeDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Details Screen</Text>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('HomeDetails')} />
    </View>
  );
}

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator style={styles.container}>
       <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <Icon
              name="menu-outline"
              size={30}
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 15 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="HomeDetails"
        component={HomeDetailsScreen}
        options={({ navigation }) => ({
          title: 'HomeDetails',
          headerLeft: () => (
            <Icon
              name="arrow-back-outline"
              size={30}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15 }}
            />
          ),
          headerShown: true
        })}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});