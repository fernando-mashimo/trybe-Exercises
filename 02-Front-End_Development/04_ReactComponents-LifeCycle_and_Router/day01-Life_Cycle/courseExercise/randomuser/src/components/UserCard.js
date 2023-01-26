import React, { Component } from "react";
import PropTypes from 'prop-types';

class UserCard extends Component {
  render() {
    const { user: { name, email, age, image } } = this.props;
    return (
      <div>
        <img src={ image } alt={ name } />
        <h3>{ name }</h3>
        <p>{`Age: ${ age }`}</p>
        <p>{`Email: ${ email }`}</p>
      </div>
    );
  }
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default UserCard;
