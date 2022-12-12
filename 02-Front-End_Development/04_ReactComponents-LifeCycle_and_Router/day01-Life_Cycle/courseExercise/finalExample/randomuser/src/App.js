import React from 'react';
import './App.css';
import Profile from './components/Profile';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Random Person Profile</h1>
        <Profile />
      </div>
    );
    }
}

export default App;
