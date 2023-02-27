import { useState } from "react";

function Form() {
  const [user, setUser] = useState({ firstName: 'Fernando', secondName: 'Mashimo', age: 41, gender: 'male' });
  const [email, setEmail] = useState('fernando.mashimo@yahoo.com.br');

  const handleChange = ({ target: { name, value }}) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleEmailChange = ({ target: { value }}) => {
    setEmail(value);
  };

  return (
    <div>
      <h1>Form</h1>
      <form className="formContainer">
        <label>First Name:
          <input 
            type="text"
            value={ user.firstName }
            name="firstName"
            onChange={ handleChange }
          >
          </input>
        </label>
        <label>Second Name:
          <input 
            type="text"
            value={ user.secondName }
            name="secondName"
            onChange={ handleChange }
          >
          </input>
        </label>
        <label>Age:
          <input 
            type="number"
            value={ user.age }
            name="age"
            onChange={ handleChange }
          >
          </input>
        </label>
        <label>Gender:
          <input type="radio" value="male" name="gender" onChange={ handleChange }/>Male
          <input type="radio" value="female" name="gender" onChange={ handleChange }/>Female
        </label>

        <label>Email:
          <input 
            type="email"
            value={ email }
            name="email"
            onChange={ handleEmailChange }
          >
          </input>
        </label>
      </form>
    </div>
  );
}

export default Form;
