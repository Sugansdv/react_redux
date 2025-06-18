import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../redux/actions/weatherActions';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const { weather, loading, error } = useSelector((state) => state.weather);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) dispatch(fetchWeather(city.trim()));
  };

  return (
    <div className="container mt-5 w-50">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4"> Mini Project 3: Weather App</h2>

          <form onSubmit={handleSubmit} className="mb-4">
            <div className="input-group">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                className="form-control"
              />
              <button className="btn btn-success" type="submit">Get Weather</button>
            </div>
          </form>

          {loading && <div className="alert alert-info">Loading...</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          {weather && (
            <div className="border-top pt-3">
              <h5>{weather.name}</h5>
              <p className="mb-1"> Temperature: <strong>{weather.main.temp} °C</strong></p>
              <p> Condition: <em>{weather.weather[0].description}</em></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
