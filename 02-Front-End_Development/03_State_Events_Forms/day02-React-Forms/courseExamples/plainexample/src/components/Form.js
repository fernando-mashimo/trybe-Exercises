import React, { Component } from 'react'

class Form extends Component {
  state = {
    name: '',
    animal: '',
    age: 0,
    text: '',
    check: 'false',
  }

  // changeHandler = (event) => {
  //   if (event.target.type === 'checkbox') {
  //     this.setState({
  //       [event.target.name]: event.target.checked,
  //     });    
  //   } else {
  //     this.setState({
  //       [event.target.name]: event.target.value,
  //     });
  //   }
  // }

  changeHandler = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form className="form">
          <fieldset>
          <label className="select">
            Selecione a opção:
            <select name="animal" onChange={this.changeHandler}>
              <option value="">--Please choose an option--</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
          </label>
          <label>
            Digite seu nome:
            <input
                type="text"
                name="name"
                onChange={this.changeHandler}
            />
          </label>
          <label>
            Informe sua idade:
            <input
                type="number"
                name="age"
                onChange={this.changeHandler}
                // value={this.state.age}
            />
          </label>
          </fieldset>
          <label>
            Digite o texto
              <textarea name="text" onChange={this.changeHandler} value={this.state.text} />
          </label>
          <label>
            Selecione ou não:
            <input name="check" type="checkbox" onChange={this.changeHandler} value={this.state.check} />
          </label>
          <label>
            <input type="file" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;