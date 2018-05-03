import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchPosts } from './redux/actions/posts';
import { fetchComments } from './redux/actions/comments'

const newStore = store();

newStore.dispatch(fetchPosts());
newStore.dispatch(fetchComments());

ReactDOM.render(
  // importing store as a prop
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
