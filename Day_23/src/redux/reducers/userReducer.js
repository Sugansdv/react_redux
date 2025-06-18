const initialState = {
  loading: false,
  users: [],
  posts: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
    case 'FETCH_POSTS_REQUEST':
      return { ...state, loading: true, error: null };

    case 'FETCH_USERS_SUCCESS':
      return { ...state, loading: false, users: action.payload };

    case 'FETCH_POSTS_SUCCESS':
      return { ...state, loading: false, posts: action.payload };

    case 'FETCH_USERS_FAILURE':
    case 'FETCH_POSTS_FAILURE':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;
