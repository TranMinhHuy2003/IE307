import { View, Text ,Button,TextInput,FlatList} from 'react-native'
import { useState } from 'react';
//Sử dụng SQLlite 
import * as SQLite from 'expo-sqlite/legacy';
const db = SQLite.openDatabase("qlbanhoa.db");

export default function TrangDangKy() {
    const [tendn,gantendn]=useState('');
    const [matkhau,ganmatkhau]=useState('');
    const [tennd,gantennd]=useState('');   
  const [listnd,ganlistnd]=useState([]);
    //Hàm Tạo Bảng Người Dùng
    const taobangUser=()=>{
        db.transaction(function (txn) {  
          txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
            [],
            function (tx, res) {
              console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                  txn.executeSql(
                  'CREATE TABLE IF NOT EXISTS table_user(userid INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(200), password VARCHAR(255),fullname varchar(500))',
                  []
                );
                alert('Tạo Bảng Thành Công');
              }
              else
              alert('Bảng đã có');
            })})}
    //Hàm thêm người dùng
    const ThemNguoiDung=()=>{
        db.transaction(function (tx) {
          tx.executeSql(
            'INSERT INTO table_user (username, password,fullname) VALUES (?,?,?)',
            [tendn, matkhau,tennd],
            (tx, results) => {
            alert('Thêm Thành Công ');
             
            }
          );
        });
      }
      //Dọc Bảng Người Dùng
      const DocBangNguoiDung=()=>{
        db.transaction((tx) => {
            tx.executeSql(
              'SELECT * FROM table_user',
              [],
              (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                  temp.push(results.rows.item(i));
                ganlistnd(temp);
              }
            );
          });
      }
         //Hiển Thị
         const ItemView = ({item}) => {
            return (
              <View >
                <Text >{item.fullname}</Text>
              </View>
            );
          };
          const ItemSeparatorView = () => {
            return (

              <View
                  style={{
                      height: 0.5,
                      width: '100%',
                      backgroundColor: '#C8C8C8'
                  }}
              />
            );
          };
  return (
    <View>
    
      <Text>Tên Người Dùng</Text> 
     <TextInput value={tennd} onChangeText={gantennd} /> 
     <Text>Tên Đăng Nhập</Text> 
     <TextInput value={tendn} onChangeText={gantendn} /> 
     <Text>Mật khẩu</Text> 
     <TextInput value={matkhau} onChangeText={ganmatkhau} secureTextEntry={true} />    
     <Button title='Đăng Ký' onPress={()=>{ThemNguoiDung()}}/>
     <Button title='Đọc Danh Sách ' onPress={()=>{DocBangNguoiDung()}}/>
 
        <Text>Danh Sách Người Dùng</Text>
        <FlatList
        data={listnd}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}