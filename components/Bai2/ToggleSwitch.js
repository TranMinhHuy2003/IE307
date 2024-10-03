//Tên: Trần Minh Huy
//MSSV: 21522168
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function ToggleSwitch({ label, value, onValueChange, isDarkMode }) {
  return (
    <View style={styles.switchContainer}>
      <Text style={[isDarkMode ? styles.darkText : styles.lightText]}>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
});
