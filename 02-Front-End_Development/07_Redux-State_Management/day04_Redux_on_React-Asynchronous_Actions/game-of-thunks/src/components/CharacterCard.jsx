import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterCard extends Component {
  render() {
    const { name, titles, culture, born, aliases, playedBy } = this.props;

    return (
      <div>
        <h1>{ name }</h1>
        <h3>Titles:</h3>
          { titles
            ? titles.map((title, index) => <p key={ index }>{title}</p>)
            : <p> </p>
          }
        <h3>Culture:</h3><span>{ culture }</span>
        <h3>Born:</h3><span>{ born }</span>
        <h3>Known as:</h3>
          { aliases
            ? aliases.map((alias, index) => <p key={ index }>{alias}</p>)
            : <p> </p>
          }
        <h3>Played By:</h3><span>{ playedBy }</span>
      </div>
    );
  }
}

const mapStateToProps = (globalState) => {
  const { fetchedCharacter } = globalState.character;
  const { name, titles, culture, born, aliases, playedBy } = fetchedCharacter;
  return { name, titles, culture, born, aliases, playedBy };
};

export default connect(mapStateToProps)(CharacterCard);
