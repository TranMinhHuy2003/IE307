//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddNoteScreen from '../screens/AddNoteScreen';
import EditNoteScreen from '../screens/EditNoteScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { SettingsContext } from '../context/SettingsContext';

const Stack = createStackNavigator();
const MainBottomTab = createBottomTabNavigator();

function StackHomeScreen() {
  const { isDarkMode } = useContext(SettingsContext);
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen 
        name="AddNoteScreen" 
        component={AddNoteScreen}
        options={({ navigation }) => ({
          title: 'AddNote',
          headerLeft: () => (
            <Ionicons
              name="arrow-back-outline"
              size={30}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15, color: 'red' }}
            />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: isDarkMode ? '#333' : '#fff'
          },
          headerTintColor: 'red',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        })}
      />
      <Stack.Screen 
        name="EditNoteScreen" 
        component={EditNoteScreen} 
        options={({ navigation }) => ({
          title: 'EditNote',
          headerLeft: () => (
            <Ionicons
              name="arrow-back-outline"
              size={30}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15, color: 'red' }}
            />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: isDarkMode ? '#333' : '#fff'
          },
          headerTintColor: 'red',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        })}
      />
    </Stack.Navigator>
  );
}

function MainBottomNavigation() {
  const { isDarkMode, fontSize } = useContext(SettingsContext);
  return(
    <MainBottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: isDarkMode ? '#333' : '#fff' },
        headerStyle: { backgroundColor: isDarkMode ? '#333' : '#fff' },
        headerTitleStyle: { color: isDarkMode ? '#fff' : '#000' }
      })}
    >
      <MainBottomTab.Screen 
        name="Home" 
        component={StackHomeScreen} 
        options={{headerShown: false}}
      />
      <MainBottomTab.Screen name="Settings" component={SettingsScreen} />
    </MainBottomTab.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MainBottomNavigation />
    </NavigationContainer>
  );
}