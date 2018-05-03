export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED';

export const CREATE_POSTS_SUCCESS = 'CREATE_POSTS_SUCCESS';
export const CREATE_POSTS_FAILED = 'CREATE_POSTS_FAILED';

export const INCREASE_VOTES_SUCCESS = 'INCREASE_VOTES_SUCCESS';
export const INCREASE_VOTES_FAILED = 'INCREASE_VOTES_FAILED';

export const DECREASE_VOTES_SUCCESS = 'DECREASE_VOTES_SUCCESS';
export const DECREASE_VOTES_FAILED = 'DECREASE_VOTES_FAILED';

const BASE_URL = 'http://localhost:8082/api';

export const fetchPosts = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/posts`);
      let posts = await response.json();
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: posts
      });
    } catch (err) {
      dispatch({
        type: FETCH_POSTS_FAILED,
        payload: err
      });
    }
  };
};

export const createPost = newPost => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // console.log('RESPONSE', response);
      let post = await response.json();
      // this is REdux where we update our store
      dispatch({
        type: CREATE_POSTS_SUCCESS,
        payload: post
      });
      // console.log('POST', post);
    } catch (err) {
      dispatch({
        type: CREATE_POSTS_FAILED,
        payload: err
      });
    }
  };
};

// pass in id to know which id vote we're referring to
export const increaseVotes = id => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/posts/votes/increase/${id}`);
      let posts = await response.json();
      dispatch({
        type: INCREASE_VOTES_SUCCESS,
        payload: posts
      });
    } catch (err) {
      dispatch({
        type: INCREASE_VOTES_FAILED,
        payload: err
      });
    }
  };
};

export const decreaseVotes = id => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/posts/votes/decrease/${id}`);
      let posts = await response.json();
      dispatch({
        type: DECREASE_VOTES_SUCCESS,
        payload: posts
      });
    } catch (err) {
      dispatch({
        type: DECREASE_VOTES_FAILED,
        payload: err
      });
    }
  };
};