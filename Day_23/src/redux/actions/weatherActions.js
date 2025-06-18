export const fetchWeather = (city) => async (dispatch) => {
  dispatch({ type: 'WEATHER_LOADING' });
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d52164c59c33ed19cc500a3280a52a0`);
    const data = await res.json();
    if (data.cod === 200) {
      dispatch({ type: 'WEATHER_SUCCESS', payload: data });
    } else {
      dispatch({ type: 'WEATHER_ERROR', payload: data.message });
    }
  } catch (err) {
    dispatch({ type: 'WEATHER_ERROR', payload: err.message });
  }
};
