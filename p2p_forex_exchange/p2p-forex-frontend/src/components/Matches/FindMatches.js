// src/components/Matches/FindMatches.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FindMatches = () => {
  const [matches, setMatches] = useState([]); // State to hold matched users
  const [message, setMessage] = useState(''); // State for error messages

  useEffect(() => {
    const fetchMatches = async () => {
      const token = localStorage.getItem('token'); // Get the token from local storage

      try {
        // Send a GET request to the matches endpoint
        const response = await axios.get('http://localhost:5000/api/matches', {
          headers: {
            Authorization: `Bearer ${token}` // Attach the token for authentication
          }
        });
        setMatches(response.data); // Set the matched users in state
      } catch (error) {
        setMessage('Error fetching matches.'); // Show error message
      }
    };

    fetchMatches(); // Call the fetch function
  }, []); // Empty dependency array means it runs once on mount

  return (
    <div>
      <h2>Find Matches</h2>
      {message && <p className="text-danger">{message}</p>} {/* Display any messages */}
      <ul className="list-group">
        {matches.map(match => (
          <li key={match.id} className="list-group-item">
            {match.username} - {match.location} {/* Display each matched user */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindMatches;
