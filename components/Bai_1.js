import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      <View style={styles.postInfo}>
        <Text style={styles.postInfoText}>{likes} lượt thích</Text>
        <Text style={styles.postInfoText}>{comments} bình luận</Text>
        <Text style={styles.postInfoText}>{shares} lượt chia sẻ</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.interactions}>
        <TouchableOpacity onPress={handleLike} style={styles.button}>
          <Text style={[styles.buttonText, liked ? styles.liked : null]}>
            <Icon name="thumbs-up" color="#000" style={[styles.buttonText, liked ? styles.liked : null]} /> {liked ? 'Liked' : 'Like'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleComment} style={styles.button}>
          <Text style={styles.buttonText}><Icon name="comment" color="#000" /> Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare} style={styles.button}>
          <Text style={styles.buttonText}><Icon name="share" color="#000" /> Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const posts = [
  {
    id: 1,
    username: 'John Doe',
    avatar: require('../assets/images/user1.jpg'),
    text: 'Beautiful day at the park!',
    image: require('../assets/images/post1.jpg'),
    likes: 10,
    comments: 5,
    shares: 2,
  },
  {
    id: 2,
    username: 'Jane Smith',
    avatar: require('../assets/images/user2.jpg'),
    text: 'Delicious homemade pizza!',
    image: require('../assets/images/post2.jpg'),
    likes: 15,
    comments: 8,
    shares: 4,
  },
  {
    id: 3,
    username: 'Bob Johnson',
    avatar: require('../assets/images/user3.jpg'),
    text: 'Had a great workout session today!',
    image: require('../assets/images/post3.jpeg'),
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