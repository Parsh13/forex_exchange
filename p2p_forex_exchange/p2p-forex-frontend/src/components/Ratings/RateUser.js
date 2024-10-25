// src/components/Ratings/RateUser.js
import React, { useState } from 'react';
import axios from 'axios';

const RateUser = () => {
  const [userId, setUserId] = useState('');
  const [rating, setRating] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const token = localStorage.getItem('token'); // Get the token from local storage

    try {
      // Send a POST request to the rating endpoint
      const response = await axios.post(`http://localhost:5000/api/ratings/rate/${userId}`, { rating }, {
        headers: {
          Authorization: `Bearer ${token}` // Attach the token for authentication
        }
      });
      setMessage(`User rated successfully! New trust score: ${response.data.trustScore}`); // Show success message
    } catch (error) {
      setMessage('Error rating user.'); // Show error message
    }
  };

  return (
    <div>
      <h2>Rate a User</h2>
      {message && <p className="text-danger">{message}</p>} {/* Display any messages */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User ID</label>
          <input
            type="text"
            className="form-control"
            value={userId}
            onChange={(e) => setUserId(e.target.value)} // Update userId state
            required
          />
        </div>
        <div className="form-group">
          <label>Rating (1-5)</label>
          <input
            type="number"
            min="1"
            max="5"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)} // Update rating state
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Rate User</button>
      </form>
    </div>
  );
};

export default RateUser;
