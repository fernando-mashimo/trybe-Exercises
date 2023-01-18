// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

class ValidEmail extends React.Component {

  verifyEmail = (email) => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailRegex.test(email);
  };
    
  render() {
    const { email } = this.props;
    return (
    <div>
        <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
        { 
          email && (
            <h3 data-testid="id-is-email-valid" className={this.verifyEmail(email) ? 'green-text' : 'red-text'}>
               {(this.verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}
            </h3>
          )
        }
    </div>
    );
  }
}

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
