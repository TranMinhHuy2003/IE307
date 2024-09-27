import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PageLoaihoa from './pages/Page1';
import PageHoa from './pages/Page2';
import PageCtHoa from './pages/Page3';
import Pagem from './pages/Pagem';
import Pageh from './pages/Pageh';
import Pageb from './pages/Pageb';
import Homepage from './pages/Homepage';
//Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef', //Set Drawer background
            width: 250, //Set Drawer width
          },
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}
      >
        <Drawer.Screen
          name="Trang chủ"
          options={{
            drawerLabel: 'Trang chủ',
            title: 'Trang chủ'
          }}
          component={Homepage} />
        <Drawer.Screen
          name="Pageh"
          options={{
            drawerLabel: 'Trang 2',
            title: 'Trang 2'
          }}
          component={Pageh} />
        <Drawer.Screen
          name="Pageb"
          options={{
            drawerLabel: 'Trang 3',
            title: 'Trang 3'
          }}
          component={Pageb} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
