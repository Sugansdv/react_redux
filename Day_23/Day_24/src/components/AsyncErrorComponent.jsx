import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AsyncErrorComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate async error
        const response = await fakeFetch(); // this will reject
        setData(response);
      } catch (err) {
        setError(err.message);
        console.error("Caught async error:", err);
      }
    };

    fetchData();
  }, []);

  // Simulated async function
  const fakeFetch = () =>
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Failed to fetch data asynchronously")), 1000)
    );

  return (
    <div className="container mt-3">
      <div className="card p-3 shadow-sm">
        <h4>Task 11: Async Error Handling</h4>
        <p>catching errors in async operations inside <code>useEffect</code>.</p>

        {error ? (
          <div className="alert alert-danger">
            <strong>Error:</strong> {error}
          </div>
        ) : data ? (
          <div className="alert alert-success">
            Data: {JSON.stringify(data)}
          </div>
        ) : (
          <div className="alert alert-info">⏳ Loading...</div>
        )}
      </div>
    </div>
  );
};

export default AsyncErrorComponent;
