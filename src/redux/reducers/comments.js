import {
  FETCH_COMMENTS_FAILED,
  FETCH_COMMENTS_SUCCESS
} from '../actions/comments';

const intialState = [];

export default (state = intialState, {type, payload}) => {
  switch (type) {
    case FETCH_COMMENTS_SUCCESS:
      return [...payload];
    case FETCH_COMMENTS_FAILED:
      return payload;
    default:
      return state;
  }
}