//Tên: Trần Minh Huy
//MSSV: 21522168
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

export default function PostsInteraction({ likes, comments, shares, liked, onLike, onComment, onShare }) {
  return (
    <View style={styles.interactions}>
      <TouchableOpacity onPress={onLike} style={styles.button}>
        <Text style={[styles.buttonText, liked ? styles.liked : null]}>
          <Icon style={[styles.buttonText, liked ? styles.liked : null]} name="thumbs-up" color="#000" /> {liked ? 'Liked' : 'Like'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onComment} style={styles.button}>
        <Text style={styles.buttonText}><Icon name="comment" color="#000" /> Comment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onShare} style={styles.button}>
        <Text style={styles.buttonText}><Icon name="share" color="#000" /> Share</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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