// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-light py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-light text-decoration-none h4">My Party App</Link>
          <div className="d-flex">
            <Link to="/create" className="btn btn-primary me-3">Create Event</Link>
            <Link to="/profile" className="btn btn-secondary">Profile</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
