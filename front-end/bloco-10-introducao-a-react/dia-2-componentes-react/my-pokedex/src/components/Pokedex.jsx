import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return pokemons.map((poke, id) => <Pokemon pokemon={poke} key={id} />);
  }
}

export default Pokedex;
