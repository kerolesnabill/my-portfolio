import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1 className>Page not found</h1>
      <Link className="btn" to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
