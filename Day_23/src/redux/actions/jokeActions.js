export const fetchJoke = () => async (dispatch) => {
  dispatch({ type: 'JOKE_LOADING' });
  try {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    dispatch({ type: 'JOKE_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'JOKE_ERROR', payload: err.message });
  }
};
