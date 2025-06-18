import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormWithValidation = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError(''); // clear error when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('❌ All fields are required!');
      return;
    }

    // Success (reset form)
    alert('✅ Form submitted successfully!');
    setFormData({ name: '', email: '' });
    setError('');
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h4>Mini Project 3: Form Submission Error</h4>
        <p>Please fill out the form. Fields are required.</p>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name<span className="text-danger">*</span></label>
            <input
              type="text"
              name="name"
              className="form-control w-50"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label>Email<span className="text-danger">*</span></label>
            <input
              type="email"
              name="email"
              className="form-control w-50"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormWithValidation;
