import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/features/weather/weatherActions';

const Task10 = () => {
  const [city, setCity] = useState('');
  const [inputError, setInputError] = useState('');
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.weather);

  // 🔹 Task 9: Handle input validation and dispatch weather thunk
  const handleFetch = () => {
    if (city.trim() === '') {
      setInputError('⚠️ Please enter a city name');
      return;
    }
    setInputError('');
    dispatch(fetchWeather(city));
  };

  // Clear input after successful fetch
  useEffect(() => {
    if (data && !loading && !error) {
      setCity('');
    }
  }, [data, loading, error]);

  return (
    <div className="container text-center mt-5">
      <h4 className="mb-4">Task 10: Build a Weather fetcher using createAsyncThunk</h4>
<h4 className="mb-4">Task 11:
Create a custom logging middleware that logs:
action type and action payload</h4>


      {/* Input + Button */}
      <div className="d-flex justify-content-center mb-2">
        <input
          type="text"
          className="form-control w-25 me-2"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleFetch()} // Enter key support
        />
        <button className="btn btn-primary" onClick={handleFetch}>
          Get Weather
        </button>
      </div>

      {/* Task 9: Validation Error */}
      {inputError && <p className="text-danger">{inputError}</p>}

      {/* API Error */}
      {error && <p className="text-danger">Error: {error}</p>}

      {/* Task 5: Loading Spinner */}
      {loading && <div className="spinner-border text-primary" role="status" />}

      {/* Weather Output */}
      {data && (
        <div className="card p-3 mx-auto mt-3" style={{ width: '300px' }}>
          <h5>{data.name}</h5>
          <p>
            Temperature: {data.main.temp}°C
            <br />
            Condition: {data.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Task10;
