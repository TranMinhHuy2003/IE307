//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { createContext, useState, useEffect } from 'react';
import db from '../db';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY AUTOINCREMENT, darkMode INTEGER, fontSize INTEGER);'
      );
      // Kiểm tra và lấy cài đặt hiện tại từ CSDL
      tx.executeSql('SELECT * FROM settings WHERE id = 1;', [], (_, { rows }) => {
        if (rows.length > 0) {
          const settings = rows.item(0);
          setIsDarkMode(!!settings.darkMode);
          setFontSize(settings.fontSize || 16);
        } else {
          // Thêm giá trị mặc định nếu chưa có cài đặt nào
          tx.executeSql('INSERT INTO settings (darkMode, fontSize) VALUES (0, 16);');
        }
      });
    });
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    db.transaction(tx => {
      tx.executeSql('UPDATE settings SET darkMode = ? WHERE id = 1;', [newDarkMode ? 1 : 0]);
    });
  };

  const changeFontSize = (size) => {
    setFontSize(size);
    db.transaction(tx => {
      tx.executeSql('UPDATE settings SET fontSize = ? WHERE id = 1;', [size]);
    });
  };

  return (
    <SettingsContext.Provider value={{ isDarkMode, fontSize, toggleDarkMode, changeFontSize }}>
      {children}
    </SettingsContext.Provider>
  );
};
