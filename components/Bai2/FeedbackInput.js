//Tên: Trần Minh Huy
//MSSV: 21522168
import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

export default function FeedbackInput({ feedback, setFeedback, isDarkMode }) {
  return (
    <View>
      <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>Feedback</Text>
      <TextInput
        style={[styles.textInput, isDarkMode ? styles.darkTextInput : styles.lightTextInput]}
        placeholder="Enter your feedback here..."
        placeholderTextColor={isDarkMode ? '#ccc' : '#666'}
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    marginBottom: 10
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
  textInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    textAlignVertical: 'top',
  },
  darkTextInput: {
    backgroundColor: '#555',
    color: '#fff',
  },
  lightTextInput: {
    backgroundColor: '#f0f0f0',
    color: '#000',
  },
});
