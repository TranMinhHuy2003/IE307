import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TrangChu from './pages/Homepage';
import Pageh from './pages/Pageh'
import Pagesb from './pages/Pageb'
import Trangquanly from './pages/Trangquanly';
//sử dụng context cho ứng dụng
import { UserContextProvider } from './pages/UserContext';
//Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
export default function App() {
  
  return (
    <UserContextProvider>
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
            }}>
            <Drawer.Screen
              name="TrangChu"
              options={{
                drawerLabel: 'Trang Chủ',
                title: 'Trang Chủ'
              }}
              component={TrangChu} />
            <Drawer.Screen
              name="Pageh"
              options={{
                drawerLabel: 'Trang Hai',
                title: 'Trang Hai'
              }}
              component={Pageh} />
                <Drawer.Screen
              name="Pagesb"
              options={{
                drawerLabel: 'Trang Ba',
                title: 'Trang Hai'
              }}
              component={Pagesb} />
                <Drawer.Screen
              name="Trangquanly"
              options={{
                drawerLabel: 'Quản Lý Người Dùng',
                title: 'Người Dùng'
              }}
              component={Trangquanly} />
          </Drawer.Navigator>
      </NavigationContainer>
    </UserContextProvider>
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
