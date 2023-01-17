import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render () {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/about">About</Link><br></br>
        <Link to="/contact">Contact</Link>
      </div>
    );
  }
}

export default Home;
