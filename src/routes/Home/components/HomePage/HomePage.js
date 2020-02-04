import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../statics/rrf.png';
import './Home.css';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>react-redux-firebase</code>.
        </p>
        <p>
          Go to
          <span> </span>
          <span> </span>
          <Link className="link-color" to="/reminders">
            reminders
          </Link>
          <span> </span>
          <span> </span>
          example
        </p>
      </header>
    </div>
  );
}

export default HomePage;
