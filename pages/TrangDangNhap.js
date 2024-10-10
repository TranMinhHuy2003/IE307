import { View, Text ,Button,TextInput,FlatList} from 'react-native'
import { useState,useEffect  } from 'react';
//sử dụng Context
import { UserContext } from './UserContext';
import { useContext } from "react";
//Sử dụng SQLlite 
import * as SQLite from 'expo-sqlite/legacy';
const db = SQLite.openDatabase("qlbanhoa.db");
export default function TrangDangNhap() {
  const [tendn,gantendn]=useState('');
    const [matkhau,ganmatkhau]=useState('');
    const [nguoidung,gannguoidung]=useState({fullname:""});   
    //lấy thông tin usercontext
    const { user,setuser } = useContext(UserContext);
    //Dọc Bảng Người Dùng
    const Kiemtradangnhap=()=>{
      db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM table_user where username=? and password=?',
            [tendn,matkhau],
            (tx, results) => {
             if( results.rows.length>0)
            {
                gannguoidung(results.rows.item(0));
                setuser(results.rows.item(0));
            }
              else
              {
               alert('Đăng nhập sai')
               gannguoidung({fullname:""});
               login({fullname:""});
              }
            }
          );
        });
    }
  return (
    <View>
     <Text>Tên Đăng Nhập</Text> 
     <TextInput value={tendn} onChangeText={gantendn} /> 
     <Text>Mật khẩu</Text> 
     <TextInput value={matkhau} onChangeText={ganmatkhau} secureTextEntry={true} />    
     <Button title='Đăng Nhập' onPress={()=>{Kiemtradangnhap()}}/>
     <Text>{nguoidung.fullname}</Text>
    </View>
  )
}