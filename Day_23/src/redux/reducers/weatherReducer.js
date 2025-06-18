const initialState = {
  weather: null,
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WEATHER_LOADING':
      return { ...state, loading: true, error: null };
    case 'WEATHER_SUCCESS':
      return { weather: action.payload, loading: false, error: null };
    case 'WEATHER_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default weatherReducer;
