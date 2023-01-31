import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacterData } from '../redux/actions';

class InputSearch extends Component {
  state = {
    name: '',
  };

  handleChange = ({ target: { value }}) => {
    this.setState({ name: value});
  };

  render() {
    const { name } = this.state;
    const { dispatch } = this.props;
    return (
      <section className="input">
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            placeholder="Character Name"
            onChange={ this.handleChange }
        >
        </input>
          <button
            type="button"
            onClick={ () => dispatch(fetchCharacterData(name))}
        >Search
        </button>
        </label>
      </section>
    );
  }
}

export default connect()(InputSearch);
