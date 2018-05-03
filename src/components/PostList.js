import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const PostList = ({ posts }) => {
  // console.log('Ahhhhhh', posts)
  let listOfPosts = posts.map(post => <Post key={post.id} post={post} />);
  return <div>{listOfPosts}</div>;
};

// map our state to props, essentially:
// we have our post on state, now we're throwing them on props
// it has to be called mapStateToProps, Redux looks for this
const mapStateToProps = ({ posts }) => ({
  posts
});

// connect takes two arguments and binding Reudx to the PostList component
export default connect(mapStateToProps, null)(PostList);
