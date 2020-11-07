import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="options">
        <li className="option">
          <Link to="/">Home</Link>
        </li>
        <li className="option">
          <Link to="/about">About</Link>
        </li>
        <li className="option">
          <Link to="/posts">Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
