import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

// Component để hiển thị từng bài đăng
const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [shares, setShares] = useState(post.shares);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleComment = () => {
    setComments(comments + 1);
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.userInfo}>
        <Image source={post.avatar} style={styles.avatar} />
        <Text style={styles.username}>{post.username}</Text>
      </View>
      <Text style={styles.postText}>{post.text}</Text>
      {post.image && <Image source={post.image} style={styles.postImage} />}
      <View style={styles.divider} />
      <View style={styles.interactions}>
        <TouchableOpacity onPress={handleLike} style={styles.button}>
          <Text style={[styles.buttonText, liked ? styles.liked : null]}>
            {liked ? 'Liked' : 'Like'} ({likes})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleComment} style={styles.button}>
          <Text style={styles.buttonText}>Comment ({comments})</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare} style={styles.button}>
          <Text style={styles.buttonText}>Share ({shares})</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Component chính hiển thị danh sách bài đăng
const App = () => {
  const posts = [
    {
      id: 1,
      username: 'John Doe',
      avatar: require('./assets/images/cuc_1.jpg'),
      text: 'Beautiful day at the park!',
      image: require('./assets/images/cuc_1.jpg'),
      likes: 10,
      comments: 5,
      shares: 2,
    },
    {
      id: 2,
      username: 'Jane Smith',
      avatar: require('./assets/images/cuc_10.jpg'),
      text: 'Delicious homemade pizza!',
      image: require('./assets/images/cuc_10.jpg'),
      likes: 15,
      comments: 8,
      shares: 4,
    },
    {
      id: 3,
      username: 'Bob Johnson',
      avatar: require('./assets/images/cuc_11.jpg'),
      text: 'Had a great workout session today!',
      image: require('./assets/images/cuc_11.jpg'),
      likes: 7,
      comments: 3,
      shares: 1,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
    color: 'red',
  },
});

export default App;
