import React from 'react';
import { Link } from 'react-router-dom';


class Contact extends React.Component {
  render () {
    return (
      <div>
        <h2>My Contact Info</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}

export default Contact;
