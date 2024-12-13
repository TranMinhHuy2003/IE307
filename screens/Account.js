//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, Button, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import { UserContext } from '../context/UserContext';

const Account = ({ navigation }) => {
  const { logout, user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData(user.id)
  }, []);  

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/users/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditPress = () => {
    navigation.navigate('EditAccount', { userData: user });
  };

  const capitalize = (str) => 
    str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/413040087_3215931368710034_7459561705945116844_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=pH69vtPeCIgQ7kNvgG61WX3&_nc_zt=24&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=Aj02y51fmgC0inMecyKnkNM&oh=00_AYDYHznMKGqs6vn_L9MnxLIMuIZiUwL8t0x51tDMEvkr9Q&oe=677C6AD2' }} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{`${capitalize(user.name.firstname)} ${capitalize(user.name.lastname)}`}</Text>
          <TouchableOpacity onPress={handleEditPress}>
            <Icon 
              name={'create-outline'} 
              size={33} 
              color="#555"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>{`${(user.name.firstname)} ${(user.name.lastname)}`}</Text>

        <Text style={styles.label}>Username:</Text>
        <Text style={styles.info}>{user.username}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{user.email}</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>{user.phone}</Text>

        <Text style={styles.label}>Address:</Text>
        <Text style={styles.info}>{`${user.address.number} ${user.address.street}, ${user.address.city}`}</Text>
      </View>

      <Button title="Log Out" onPress={logout} color="#2196F3" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  editText: {
    color: 'blue',
    marginTop: 5,
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 2,
    fontSize: 16
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Account;
