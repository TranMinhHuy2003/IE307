import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrangDangKy from './TrangDangKy';
import TrangDangNhap from './TrangDangNhap';
const Tab = createBottomTabNavigator();
export default function Trangquanly() {
  return (
    <Tab.Navigator>
            <Tab.Screen
            name="TrangDangKy"
            component={TrangDangKy}
            options={{
                tabBarLabel: 'Đăng ký',
                title: 'Đăng Ký',
            }}  />
            <Tab.Screen
            name="TrangDangNhap"
            component={TrangDangNhap}
            options={{
                tabBarLabel: 'Đăng Nhập',
                title: 'Đăng Nhập'
            }} />
  </Tab.Navigator>
  )
}