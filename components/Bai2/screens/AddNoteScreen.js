//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useState, useContext, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import db from '../db';
import { SettingsContext } from '../context/SettingsContext';

const AddNoteScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { isDarkMode, fontSize } = useContext(SettingsContext);

  const saveNote = () => {
    if (!title.trim()) {
      Alert.alert('Cảnh báo', 'Vui lòng nhập tiêu đề cho ghi chú');
      return;
    }
    db.transaction(tx => {
      tx.executeSql('INSERT INTO notes (title, content) VALUES (?, ?);', [title, content]);
    });
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20, backgroundColor: isDarkMode ? '#333' : '#fff', flex: 1 }}>
      <TextInput
        placeholderTextColor= {isDarkMode ? '#fff' : '#000'}
        placeholder="Enter your title"
        style={[styles.input, {fontSize, color: isDarkMode ? '#fff' : '#000'}]}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholderTextColor= {isDarkMode ? '#fff' : '#000'}
        placeholder="Enter your note"
        style={[styles.input, {fontSize, color: isDarkMode ? '#fff' : '#000'}]}
        value={content}
        onChangeText={setContent}
        multiline
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
            onPress={()=>{saveNote()}}
            style={{ color: 'green' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1, 
    paddingVertical: 20, 
    paddingLeft: 10, 
    borderRadius: 6, 
    borderColor: '#ccc',
    marginBottom: 20
  }
});

export default AddNoteScreen;
