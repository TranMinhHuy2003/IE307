//Tên: Trần Minh Huy
//MSSV: 21522168
import * as SQLite from 'expo-sqlite/legacy';
const db = SQLite.openDatabase('notes.db');

export const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT);'
    );
  });
};

export default db;
