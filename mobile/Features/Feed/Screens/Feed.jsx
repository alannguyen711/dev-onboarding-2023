import {
  Button, Text, View, TextInput, StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Post from '../Components/Post/Post';

export default function Feed({ navigation }) {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  const GIVEN_POSTS = [
    {
      _id: 1,
      username: 'James',
      body: 'Mobile development is fun!',
    },
    {
      _id: 2,
      username: 'Sidd',
      body: 'I just finished watching another movie. It was interesting, but kind of boring :(',
    },
    {
      _id: 3,
      username: 'Jerry',
      body: 'I am excited to see everyone become friends!',
    },
  ];

  const [user, setUser] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState(GIVEN_POSTS);

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  const submitPost = () => {
    const temp = [...posts];
    temp.push({
      _id: temp.length + 1,
      username: user,
      body: content,
    });
    setPosts(temp);
    setUser('');
    setContent('');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Posts</Text>
      <Button
        title="To Landing"
        onPress={navigateToLanding}
      />
      {posts.map((contentDetails) => (
        <View>
          <Post body={contentDetails.body} author={contentDetails.username} />
        </View>
      ))}
      <Text>Username:</Text>
      <TextInput style={styles.input} onChangeText={setUser} value={user} />
      <Text>Post content:</Text>
      <TextInput style={styles.input} onChangeText={setContent} value={content} />
      <Button title="Add a Post" onPress={submitPost} />
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
