import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';

class App extends React.Component {
  render() {

    const { dispatch, countState, clickState } = this.props;
    console.log(this.props);

    return (
      <div className="App">
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button
          onClick={ () => {
            dispatch(actionCreator('INCREMENT_COUNTER', 1));
            dispatch(actionCreator('INCREMENT_CLICK', 1));
          }}
        >Incrementa 1</button>
        <button
          onClick={ () => {
            dispatch(actionCreator('INCREMENT_COUNTER', 5));
            dispatch(actionCreator('INCREMENT_CLICK', 1));
          }}
        >Incrementa 5</button>
        <h3>{`Número de clicks: ${clickState}`}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.count,
  clickState: state.clicks,
});

export default connect(mapStateToProps)(App);
