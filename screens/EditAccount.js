//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import { UserContext } from '../context/UserContext';

const EditAccount = () => {
  const { user, setUser } = useContext(UserContext);
  const route = useRoute();
  const navigation = useNavigation();
  const {userData} = route.params;

  const [form, setForm] = useState({
    id: user.id,
    name: {
      firstname: userData.name.firstname,
      lastname: userData.name.lastname,
    },
    username: userData.username,
    email: userData.email,
    phone: userData.phone,
    address: {
      number: userData.address.number,
      street: userData.address.street,
      city: userData.address.city,
    },
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    const keys = field.split('.');
    setForm((prev) => {
      const updatedForm = { ...prev };
      let current = updatedForm;
      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          current[key] = value;
        } else {
          current = current[key];
        }
      });
      return updatedForm;
    });
  };
  

  const handleSave = async () => {
    setLoading(true);
    if (!form.name.firstname || !form.name.lastname || !form.username || !form.email || !form.phone || !form.address.number || !form.address.street || !form.address.city) {
      Alert.alert('Error', 'Please fill all the fields');
      setLoading(false);
      return;
    }
    try {
      const response = await axios.put(`https://fakestoreapi.com/users/${user.id}`, form);
      setUser(response.data);
      Alert.alert('Success', 'Your account has been updated.');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to update account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="checkmark-outline"
          size={30}
          onPress={handleSave}
          style={{ marginRight: 18 }}
        />
      ),
    });
  }, [navigation, form]);

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <>
          <View style={{flexDirection: 'row'}}>
            <View key={'name.firstname'} style={[styles.inputGroup, {flex: 1, marginRight: 10}]}>
              <Text style={styles.label}>{'firstname'.toUpperCase()}</Text>
              <TextInput
                style={styles.input}
                value={String(form.name.firstname)}
                onChangeText={(value) => handleInputChange('name.firstname', value)}
              />
            </View>
            <View key={'name.lastname'} style={[styles.inputGroup, {flex: 1}]}>
              <Text style={styles.label}>{'lastname'.toUpperCase()}</Text>
              <TextInput
                style={styles.input}
                value={String(form.name.lastname)}
                onChangeText={(value) => handleInputChange('name.lastname', value)}
              />
            </View>
          </View>
          {['username', 'email', 'phone'].map((field) => (
            <View key={field} style={styles.inputGroup}>
              <Text style={styles.label}>{field.toUpperCase()}</Text>
              <TextInput
                style={styles.input}
                value={String(form[field])} // Truy cập trực tiếp form.username, form.email, form.phone
                onChangeText={(value) => handleInputChange(field, value)}
              />
            </View>
          ))}

          {/* Các trường liên quan đến address */}
          {['number', 'street', 'city'].map((field) => (
            <View key={field} style={styles.inputGroup}>
              <Text style={styles.label}>{field.toUpperCase()}</Text>
              <TextInput
                style={styles.input}
                value={String(form.address[field])} // Truy cập form.address.number, form.address.street, form.address.city
                onChangeText={(value) => handleInputChange(`address.${field}`, value)} // Cập nhật đúng vào address
              />
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#0000ff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditAccount;
