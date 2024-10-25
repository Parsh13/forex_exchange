// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to P2P Forex Exchange</h2>
      <p>Find and rate users for your forex transactions.</p>
      <Link to="/login" className="btn btn-primary m-2">Login</Link>
      <Link to="/register" className="btn btn-secondary m-2">Register</Link>
      <Link to="/find-matches" className="btn btn-success m-2">Find Matches</Link>
      <Link to="/rate" className="btn btn-warning m-2">Rate User</Link>
    </div>
  );
};

export default Home;
