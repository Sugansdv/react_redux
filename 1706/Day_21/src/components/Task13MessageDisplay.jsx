import React from 'react';
import { useSelector } from 'react-redux';

const Task13MessageDisplay = () => {
  const message = useSelector((state) => state.message.text);

  return (
    <div className="alert alert-info mt-3">
      <strong>Global Message:</strong> {message}
    </div>
  );
};

export default Task13MessageDisplay;
