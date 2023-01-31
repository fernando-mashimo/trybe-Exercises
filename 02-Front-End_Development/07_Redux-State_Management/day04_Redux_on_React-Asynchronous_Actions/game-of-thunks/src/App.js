import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharacterCard from './components/CharacterCard';
import InputSearch from './components/InputSearch';
import Loading from './components/Loading';

class App extends Component {
  render() {
    const { isLoading } = this.props;
    return (
      <div>
        <section className="header">
          <h1>Game of Thrones</h1>
          <p>- with React-Redux and Thunk -</p>
        </section>

        <section>
          <InputSearch />
          {isLoading
            ? <Loading />
            : <CharacterCard />
          }
        </section>
        
      </div>
    );
  }
}

const mapStateToProps = ({ character }) => {
  const { isLoading } = character;
  return { isLoading };
};

export default connect(mapStateToProps)(App);
