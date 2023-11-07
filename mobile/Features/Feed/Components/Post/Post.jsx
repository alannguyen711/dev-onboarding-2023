import { View, Text } from 'react-native';
import propTypes from 'prop-types';

function Post({ body, author }) {
  return (
    <View>
      <Text>
        {author}
        :
        {' '}
        {body}
      </Text>
    </View>
  );
}

export default Post;

Post.propTypes = {
  body: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
};
