import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <h1>Student Portal</h1>
      <div>
        <Link to="/admin" className="button button-primary">Admin Panel</Link>
        <Link to="/result" className="button button-secondary">Search Result</Link>
      </div>
    </div>
  );
};

export default App;