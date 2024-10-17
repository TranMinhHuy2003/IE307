//Tên: Trần Minh Huy
//MSSV: 21522168
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
function Help() {
  return (
    <View style={styles.container}>
      <Text>Helps Screen</Text>
    </View>
  );
}

export default function HelpStack({ navigation }) {
  return (
    <Stack.Navigator style={styles.container}>
       <Stack.Screen
        name="Helps"
        component={Help}
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
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});