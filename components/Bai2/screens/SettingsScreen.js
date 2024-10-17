//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useContext } from 'react';
import { View, Switch, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { SettingsContext } from '../context/SettingsContext';

const SettingsScreen = () => {
  const { isDarkMode, fontSize, toggleDarkMode, changeFontSize } = useContext(SettingsContext);

  return (
    <View style={{ padding: 20, flex: 1, paddingTop: 280, backgroundColor: isDarkMode ? '#333' : '#fff' }}>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
        <Text style={{ fontSize, color: isDarkMode ? '#fff' : '#000' }}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{ fontSize, color: isDarkMode ? '#fff' : '#000' }}>Font Size</Text>
        <Text style={{ fontSize, color: isDarkMode ? '#fff' : '#000' }}>{fontSize}</Text>
      </View>
      <Slider
        minimumValue={12}
        maximumValue={36}
        step={1}
        value={fontSize}
        onValueChange={changeFontSize}
      />
    </View>
  );
};

export default SettingsScreen;
