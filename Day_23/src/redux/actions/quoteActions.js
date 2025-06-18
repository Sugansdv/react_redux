export const fetchQuote = () => async (dispatch) => {
  dispatch({ type: 'QUOTE_LOADING' });
  try {
    const res = await fetch('https://dummyjson.com/quotes/random');
    const data = await res.json();
    dispatch({ type: 'QUOTE_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'QUOTE_ERROR', payload: err.message });
  }
};
