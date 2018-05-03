export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'
export const FETCH_COMMENTS_FAILED = 'FETCH_COMMENTS_FAILED'

const BASE_URL = 'http://localhost:8082/api';

export const fetchComments = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/comments`);
      let comments = await response.json();
      dispatch({
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
      });
    } catch (err) {
      dispatch({
        type: FETCH_COMMENTS_FAILED,
        payload: err
      });
    }
  };
};  