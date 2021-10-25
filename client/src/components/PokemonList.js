import PokemonListEntry from './PokemonListEntry.js';
import App from './App.jsx';
import React from 'react';

var PokemonList = (props) => (
  <div>
    {props.allPokemon.map((pokemon) => {
      return <PokemonListEntry pokemon={pokemon} key={pokemon.id} onDelete={props.onDelete} />
    })}
  </div>
)

export default PokemonList;

