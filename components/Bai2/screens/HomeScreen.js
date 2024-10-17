//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import db from '../db';
import { createTables } from '../db'
import { useIsFocused } from '@react-navigation/native';
import { SettingsContext } from '../context/SettingsContext';

const HomeScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const { isDarkMode, fontSize } = useContext(SettingsContext);
  const isFocused = useIsFocused();

  useEffect(() => {
    createTables();
    if (isFocused) {
      fetchNotes();
    }
  }, [isFocused, fetchNotes]);

  const fetchNotes = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM notes',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setNotes(temp);
        }
      );
      navigation.navigate('HomeScreen');
    });
  };

  const deleteNote = (id) => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM notes WHERE id = ?;', [id], () => fetchNotes());
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Text style={{ fontSize: fontSize + 5, color: 'red', fontWeight: 'bold', textAlign: 'center', marginVertical: 40 }}>Note App</Text>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, marginBottom: 10}}>
        <Text style={[styles.title, { fontSize, color: isDarkMode ? '#fff' : '#000' }]}>All Notes</Text>
        <Ionicons
            name="add-circle"
            size={fontSize + 30}
            onPress={() => navigation.navigate('AddNoteScreen')}
            style={{ color: 'red' }}
        />
      </View>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.noteContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('EditNoteScreen', { noteId: item.id })}>
              <Text style={[styles.noteTitle, { fontSize }, { color: isDarkMode ? '#fff' : '#000' }]}>{item.title}</Text>
              <Text style={[styles.noteContent, { fontSize: fontSize - 2 }, { color: isDarkMode ? '#f2f2f2' : '#000' }]}>{item.content}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteNote(item.id)}>
              <Ionicons name='trash-outline' size={fontSize + 5} color='red' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
  },
  title: { 
    textAlign: 'center', 
    marginBottom: 20, 
    fontWeight: 'bold' 
  },
  noteContainer: { 
    padding: 16, 
    borderWidth: 1, 
    borderRadius: 15, 
    borderColor: '#ccc', 
    marginVertical: 10, 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  noteTitle: { 
    fontWeight: 'bold' 
  },
  noteContent: {
    width: 280
  },
  addButton: { 
    fontSize: 32, 
    textAlign: 'center', 
    color: 'white' 
  }
});

export default HomeScreen;
