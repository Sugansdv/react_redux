import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMessage } from '../redux/messageSlice';

const Task13MessageUpdater = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateMessage(input));
    setInput('');
  };

  return (
    <div className="mt-4">
      <h5> Task 13: Update Global Message</h5>
      <input
        type="text"
        className="form-control w-50 d-inline-block me-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button className="btn btn-primary" onClick={handleUpdate}>
        Update Message
      </button>
    </div>
  );
};

export default Task13MessageUpdater;
