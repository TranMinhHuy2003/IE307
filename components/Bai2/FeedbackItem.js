//Tên: Trần Minh Huy
//MSSV: 21522168
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function FeedbackItem({ item, isDarkMode }) {
  return (
    <Text style={[styles.feedbackItem, isDarkMode ? styles.darkText : styles.lightText]}>
      {item.content}
    </Text>
  );
}

const styles = StyleSheet.create({
  feedbackItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
});