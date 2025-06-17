import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/features/weather/weatherActions';

const Proj3 = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.weather);

  const handleSearch = () => {
    if (city.trim() !== '') {
      dispatch(fetchWeather(city));
    }
  };

  return (
    <div className="container text-center mt-5">
      <h4 className="mb-4">Mini Project 3: Weather Info App</h4>
      <div className="d-flex justify-content-center mb-2">
        <input
          type="text"
          className="form-control w-25 me-2"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Get Weather
        </button>
      </div>

      {loading && <div className="spinner-border text-primary" role="status" />}
      {error && <p className="text-danger mt-2">Error: {error}</p>}

      {data && (
        <div className="card mt-3 p-3 mx-auto" style={{ width: '300px' }}>
          <h5>{data.name}</h5>
          <p>
            Temperature: {data.main.temp}°C <br />
            Condition: {data.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Proj3;
