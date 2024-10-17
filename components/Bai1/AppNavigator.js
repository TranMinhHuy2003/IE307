//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { AuthContext } from './AuthContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Categories from './Categories';
import Favorites from './Favourites';
import Profile from './Profile';
import Noti from './Noti';
import Help from './Help';

const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MainBottomTab = createBottomTabNavigator();

const AuthStackNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Register" component={Register} />
  </AuthStack.Navigator>
);

function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Notifications"
        component={Noti}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="Helps"
        component={Help}
      />
    </Drawer.Navigator>
  );
}

function getHidden(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'block';
    case 'Notifications':
      return 'none';
    case 'Helps':
      return 'none';
  }
}

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
      tabBarStyle: {
        display: getHidden(route)
      }
    })}
  >
    <MainBottomTab.Screen options={{headerShown: false}} name="Home" component={DrawerNav} />
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