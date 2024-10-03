//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserInfo from './UserInfo';
import PostsInteraction from './PostsInteraction';
import PostImage from './PostImage';

export default function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [shares, setShares] = useState(post.shares);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
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
      <UserInfo avatar={post.avatar} username={post.username} />
      <Text style={styles.postText}>{post.text}</Text>
      <PostImage image={post.image} />
      <View style={styles.postInfo}>
        <Text style={styles.postInfoText}>{likes} lượt thích</Text>
        <Text style={styles.postInfoText}>{comments} bình luận</Text>
        <Text style={styles.postInfoText}>{shares} lượt chia sẻ</Text>
      </View>
      <View style={styles.divider} />
      <PostsInteraction
        likes={likes} 
        comments={comments} 
        shares={shares} 
        liked={liked} 
        onLike={handleLike} 
        onComment={handleComment} 
        onShare={handleShare} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  postInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: -2
  },
  postInfoText: {
    color: '#aaa',
  },
  postText: {
    fontSize: 14,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});