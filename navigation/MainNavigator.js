//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserContext } from '../context/UserContext';
import { CartContext } from '../context/CartContext';
import Register from '../screens/Register';
import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import ProductDetail from '../screens/ProductDetail';
import Categories from '../screens/Categories';
import Account from '../screens/Account';
import EditAccount from '../screens/EditAccount';
import Cart from '../screens/Cart';
// import CartScreen from '../screens/CartScreen';
// import AccountScreen from '../screens/AccountScreen';
// import ProductDetailScreen from '../screens/ProductDetailScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

function getHiddenBottomTab(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'HomeScreen';

  switch (routeName) {
    case 'HomeScreen':
      return true;
    case 'ProductDetail':
      return false;
    case 'EditAccount':
      return false;
  }
}

const AuthStackNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Register" component={Register} />
  </AuthStack.Navigator>
);

function Home() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="arrow-back-outline"
              size={30}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15 }}
            />
          ),
          headerShown: true,
        })}
      />
    </Stack.Navigator>
  );
}

function Category() {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          title: 'Categories',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="arrow-back-outline"
              size={30}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15 }}
            />
          ),
          headerShown: true,
        })}
      />
    </Stack.Navigator>
  );
}

function AccountEdit() {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Account',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="EditAccount"
        component={EditAccount}
        options={({ navigation }) => ({
          title: 'Edit Account',
          headerLeft: () => (
            <Icon
              name="arrow-back-outline"
              size={30}
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15 }}
            />
          ),
          headerShown: true,
        })}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  const { cart } = useContext(CartContext);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
  
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: 'gray',
        headerShown: getHiddenBottomTab(route),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categories" component={Category} />
      <Tab.Screen name="Cart" component={Cart} options={{ tabBarBadge: cart.length }} />
      <Tab.Screen name="Account" component={AccountEdit} />
      {/* <Tab.Screen name="Categories" component={CategoryScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Account" component={AccountScreen} /> */}
    </Tab.Navigator>
  );
}

export default function MainNavigator() {
  const { user, loading } = useContext(UserContext);
  
  if (loading) {
    return null;
  }
  
  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
