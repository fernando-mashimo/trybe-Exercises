import React, { useState } from 'react';

const Form = () => {
  // const [ studentInput, setStudentInput ] = useState({ name: '', age: 0, city: '', module: '' });
  const [ name, setName ] = useState('');
  const [ age, setAge ] = useState(0);
  const [ city, setCity ] = useState('');
  const [ module, setModule ] = useState('');

  // const handleChange = ({ name, value }) => {
  //   setStudentInput({ studentInput[name]: value });
  // }

  return (
    <form>
      <label htmlFor="name">Nome:
        <input
          type="text"
          id="name"
          value={ name }
          name="name"
          onChange={({target}) => setName(target.value)}
        >
        </input>
      </label>
      <label htmlFor="age">Idade:
        <input
          type="number"
          id="age"
          value={age}
          name="age"
          onChange={({target}) => setAge(target.value)}
        >
        </input>
      </label>
      <label htmlFor="city">Cidade:
        <input
          type="text"
          id="city"
          value={city}
          name="city"
          onChange={({target}) => setCity(target.value)}
        >
        </input>
      </label>

      <label htmlFor="module" value={module} onChange={({target}) => setModule(target.value)}>Módulo:
        <input type="radio" value="Fundamentos" name="module" id="module" />Fundamentos
        <input type="radio" value="Front-end" name="module" id="module" />Front-end
        <input type="radio" value="Back-end" name="module" id="module" />Back-end
        <input type="radio" value="Ciência da Computação" name="module" id="module" />Ciência da Computação
      </label>

      <button
        type="button"
        onClick={ () => console.log("Click") }
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
