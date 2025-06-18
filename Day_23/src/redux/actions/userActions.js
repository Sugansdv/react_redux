import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: 'FETCH_USERS_REQUEST' });
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'FETCH_USERS_FAILURE', payload: err.message });
  }
};

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: 'FETCH_POSTS_REQUEST' });
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: res.data.slice(0, 5) });
  } catch (err) {
    dispatch({ type: 'FETCH_POSTS_FAILURE', payload: err.message });
  }
};



export const asyncLogAction = () => async (dispatch) => {
  console.log('Async Action Called');
  dispatch({ type: 'ASYNC_ACTION' });
};
