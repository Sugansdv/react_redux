const initialState = {
  quote: {},
  loading: false,
  error: null,
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'QUOTE_LOADING':
      return { ...state, loading: true, error: null };
    case 'QUOTE_SUCCESS':
      return { quote: action.payload, loading: false, error: null };
    case 'QUOTE_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default quoteReducer;
