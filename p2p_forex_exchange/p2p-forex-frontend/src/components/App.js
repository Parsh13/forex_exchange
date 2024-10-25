// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import RateUser from './Ratings/RateUser';
import FindMatches from './Matches/FindMatches';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center my-4">P2P Foreign Exchange</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rate" element={<RateUser />} />
          <Route path="/find-matches" element={<FindMatches />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
