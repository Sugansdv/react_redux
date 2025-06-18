import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  if (count === 5) {
    throw new Error("💥 Counter crashed at 5!");
  }

  return (
    <div className="text-center">
      <h5>Count: {count}</h5>
      <button
        className="btn btn-primary mt-2"
        onClick={() => setCount(prev => prev + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default CounterComponent;
