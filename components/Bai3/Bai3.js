//Tên: Trần Minh Huy
//MSSV: 21522168
import React from 'react';
import AppNavigator from './AppNavigator';
import { AuthProvider } from './AuthContext';

export default function Bai3() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
