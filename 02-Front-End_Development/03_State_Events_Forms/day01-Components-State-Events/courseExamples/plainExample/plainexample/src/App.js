import React from 'react';
import './App.css';

class App extends React.Component {
  constructor () {
    super(); // necessário executar este método no início para o React entender que estamos sobrescrevendo o constructor "original"
    
    // this.countClicks = this.countClicks.bind(this);
    this.fraseAleatória = this.fraseAleatória.bind(this);
    this.tchau = this.tchau.bind(this);
    this.state = {
      clickEventRecord1: 0,
      clickEventRecord2: 0,
      clickEventRecord3: 999,
    }
  }
  
  countClicks = (event) => {
    this.setState((prevState, _props) => ({
      clickEventRecord1: prevState.clickEventRecord1 + 1
    }))
    const { clickEventRecord1 } = this.state;
    if ((clickEventRecord1 + 1) % 2 === 0) {
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.style.backgroundColor = 'grey';
    }
  }
  
  fraseAleatória(event) {
    this.setState((prevState, _props) => ({ // setState é um método assíncrono
      clickEventRecord2: prevState.clickEventRecord2 + 1
    }))
    const { clickEventRecord2 } = this.state;
    if ((clickEventRecord2 + 1) % 2 === 0) {
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.style.backgroundColor = 'grey';
    }
  }
  
  tchau(event) {
    this.setState((prevState, _props) => ({
      clickEventRecord3: prevState.clickEventRecord3 - 1
    }))
    const { clickEventRecord3 } = this.state;
    if ((clickEventRecord3 + 1) % 2 === 0) {
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.style.backgroundColor = 'grey';
    }
  }

  render() {
    console.log(this);
    const { clickEventRecord1, clickEventRecord2, clickEventRecord3 } = this.state;
    return (
      <>
        <button onClick={this.countClicks}>{`countClicks (${clickEventRecord1})`}</button>
        <button onClick={this.fraseAleatória}>{`aleatória (${clickEventRecord2})`}</button>
        <button onClick={this.tchau}>{`Tchau! (${clickEventRecord3})`}</button>
      </>
    )
  }
}

export default App;
