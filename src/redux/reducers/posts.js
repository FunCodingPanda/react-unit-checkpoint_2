import { 
  FETCH_POSTS_FAILED, 
  FETCH_POSTS_SUCCESS, 
  CREATE_POSTS_SUCCESS, 
  CREATE_POSTS_FAILED,
  INCREASE_VOTES_SUCCESS,
  INCREASE_VOTES_FAILED,
  DECREASE_VOTES_SUCCESS,
  DECREASE_VOTES_FAILED
} from '../actions/posts';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return [...payload];
    case FETCH_POSTS_FAILED:
      return payload;
    case CREATE_POSTS_SUCCESS:
      return [...state, payload];
    case CREATE_POSTS_FAILED:
      return payload;
    case INCREASE_VOTES_SUCCESS:
      // this filters out all the ones that don't match payload.id
      // another way is using slice too
      // filter then change the one that is supposed to change
      // spread over the whole object and update only the matched
      // payload.id is the post that user changes to upvote
      let filteredState = state.filter(post => post.id !== payload.id)
      return [...filteredState, payload].sort((a, b) => b.votes - a.votes);
    case INCREASE_VOTES_FAILED:
      return payload;
    case DECREASE_VOTES_SUCCESS:
      let filterForDecrease = state.filter(post => post.id !== payload.id)
      return [...filterForDecrease, payload].sort((a, b) => a.votes - b.votes);
    case DECREASE_VOTES_FAILED:
      return payload;
    default:
      return state;
  }
};
