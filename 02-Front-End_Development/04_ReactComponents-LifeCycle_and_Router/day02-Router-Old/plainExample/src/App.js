import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
          <h1>React Router</h1>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
      </BrowserRouter>
    );
  }
}

export default App;
