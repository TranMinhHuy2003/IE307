//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from './AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Categories from './Categories';
import Favorites from './Favourites';
import Profile from './Profile';

const AuthStack = createStackNavigator();
const MainBottomTab = createBottomTabNavigator();

const AuthStackNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Register" component={Register} />
  </AuthStack.Navigator>
);

const MainBottomTabNavigator = () => (
  <MainBottomTab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Categories') {
          iconName = focused ? 'grid' : 'grid-outline';
        } else if (route.name === 'Favorites') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <MainBottomTab.Screen name="Home" component={Home} />
    <MainBottomTab.Screen name="Categories" component={Categories} />
    <MainBottomTab.Screen name="Favorites" component={Favorites} options={{ tabBarBadge: 3 }} />
    <MainBottomTab.Screen name="Profile" component={Profile} />
  </MainBottomTab.Navigator>
);

export default function AppNavigator() {
  const { user, loading } = useContext(AuthContext);
  
  if (loading) {
    return null;
  }
  
  return (
    <NavigationContainer>
      {user ? <MainBottomTabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}