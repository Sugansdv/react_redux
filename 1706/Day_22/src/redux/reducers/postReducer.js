const initialState = {
  posts: [
    { id: 1, title: 'React Redux Intro', likes: 0, dislikes: 0 },
    { id: 2, title: 'Using Thunk in Redux', likes: 0, dislikes: 0 },
    { id: 3, title: 'Middleware Explained', likes: 0, dislikes: 0 }
  ]
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIKE_POST':
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload
            ? { ...post, likes: post.likes + 1 }
            : post
        )
      };
    case 'DISLIKE_POST':
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload
            ? { ...post, dislikes: post.dislikes + 1 }
            : post
        )
      };
    default:
      return state;
  }
};

export default postReducer;
