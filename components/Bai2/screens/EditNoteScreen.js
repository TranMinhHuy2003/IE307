//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useState, useEffect, useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SettingsContext } from '../context/SettingsContext';
import db from '../db';

const EditNoteScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { noteId } = route.params;
  const { isDarkMode, fontSize } = useContext(SettingsContext);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Tải ghi chú từ CSDL khi màn hình được hiển thị
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM notes WHERE id = ?;',
        [noteId],
        (_, { rows }) => {
          if (rows.length > 0) {
            const note = rows.item(0);
            setTitle(note.title);
            setContent(note.content);
          }
        }
      );
    });
  }, [noteId]);

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Lỗi', 'Tiêu đề không được để trống.');
      return;
    }

    db.transaction(tx => {
      tx.executeSql(
        'UPDATE notes SET title = ?, content = ? WHERE id = ?;',
        [title, content, noteId],
        () => {
          Alert.alert('Thành công', 'Ghi chú đã được cập nhật.');
          navigation.goBack(); // Quay lại màn hình trang chủ
        },
        (_, error) => {
          Alert.alert('Lỗi', 'Không thể cập nhật ghi chú.');
          console.error(error);
        }
      );
    });
  };

  return (
    <View style={[styles.container, {backgroundColor: isDarkMode ? '#333' : '#fff'}]}>
      <TextInput
        placeholderTextColor= {isDarkMode ? '#fff' : '#000'}
        placeholder="Tiêu đề"
        value={title}
        onChangeText={setTitle}
        style={[styles.input, {fontSize, color: isDarkMode ? '#fff' : '#000'}]}
      />
      <TextInput
        placeholderTextColor= {isDarkMode ? '#fff' : '#000'}
        placeholder="Nội dung"
        value={content}
        onChangeText={setContent}
        multiline
        style={[styles.input, {fontSize, color: isDarkMode ? '#fff' : '#000'}]}
      />
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <Ionicons
            name="close-circle"
            size={fontSize + 20}
            onPress={() => navigation.goBack()}
            style={{ color: 'red' }}
        />
        <Ionicons
            name="checkmark-circle"
            size={fontSize + 20}
            onPress={()=>{handleSave()}}
            style={{ color: 'green' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  input: {
    borderWidth: 1, 
    paddingVertical: 20, 
    paddingLeft: 10, 
    borderRadius: 6, 
    borderColor: '#ccc',
    marginBottom: 20
  }
});

export default EditNoteScreen;
