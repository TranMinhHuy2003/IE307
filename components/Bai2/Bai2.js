//Tên: Trần Minh Huy
//MSSV: 21522168
import React from 'react';
import { SettingsProvider } from './context/SettingsContext';
import MainNavigationContainer from './navigation/MainNavigator';

export default function App() {
  return (
    <SettingsProvider>
      <MainNavigationContainer />
    </SettingsProvider>
  );
}