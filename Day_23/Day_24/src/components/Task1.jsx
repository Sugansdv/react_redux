import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Task1 = () => (
  <div className="container mt-4">
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Task 1. Introduction to Error Boundaries</h5>
        <p className="card-text">
          In React, Error Boundaries are special components used to catch JavaScript errors in their child components.
          They help prevent the entire app from crashing by showing a fallback UI when an error occurs.
        </p>
      </div>
    </div>
  </div>
);

export default Task1;
