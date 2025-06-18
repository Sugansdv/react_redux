const initialState = {
  joke: null,
  loading: false,
  error: null,
};

const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'JOKE_LOADING':
      return { ...state, loading: true, error: null };
    case 'JOKE_SUCCESS':
      return { joke: action.payload, loading: false, error: null };
    case 'JOKE_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default jokeReducer;
