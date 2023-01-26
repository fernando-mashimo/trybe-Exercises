import React from 'react';
import { Link } from 'react-router-dom';


class About extends React.Component {
  render () {
    return (
      <div>
        <h2>About me</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default About;
