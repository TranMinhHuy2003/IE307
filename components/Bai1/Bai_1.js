//Tên: Trần Minh Huy
//MSSV: 21522168
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Post from './Post';

const posts = [
  {
    id: 1,
    username: 'John Doe',
    avatar: require('C:/Users/user/.vscode/code/IE307/UIT - IE307/assets/images/user1.jpg'),
    text: 'Beautiful day at the park!',
    image: require('C:/Users/user/.vscode/code/IE307/UIT - IE307/assets/images/post1.jpg'),
    likes: 10,
    comments: 5,
    shares: 2,
  },
  {
    id: 2,
    username: 'Jane Smith',
    avatar: require('C:/Users/user/.vscode/code/IE307/UIT - IE307/assets/images/user2.jpg'),
    text: 'Delicious homemade pizza!',
    image: require('C:/Users/user/.vscode/code/IE307/UIT - IE307/assets/images/post2.jpg'),
    likes: 15,
    comments: 8,
    shares: 4,
  },
  {
    id: 3,
    username: 'Bob Johnson',
    avatar: require('C:/Users/user/.vscode/code/IE307/UIT - IE307/assets/images/user3.jpg'),
    text: 'Had a great workout session today!',
    image: require('C:/Users/user/.vscode/code/IE307/UIT - IE307/assets/images/post3.jpeg'),
    likes: 7,
    comments: 3,
    shares: 1,
  },
];

export default function Bai_1() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.heading}>Social Media Feed</Text>
      </View>
      <View style={styles.postsContainer}>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    backgroundColor: '#3399ff',
    fontSize: 30,
    color: '#fff',
    padding: 20,
  },
  container: {
    flex: 1
  },
  postsContainer: {
    padding: 10
  },
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: -2
  },
  postInfoText: {
    color: '#aaa'
  },
  postText: {
    fontSize: 14,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  liked: {
    color: '#0000ff',
  },
});