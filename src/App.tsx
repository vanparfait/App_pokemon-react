
import  { FunctionComponent, useEffect, useState } from 'react';
import POKEMONS from './models/mock-pokemon';
import  Pokemon  from './models/pokemon';


const App: FunctionComponent = () => {

  const [pokemons, setPokemon] = useState<Pokemon[]>([])

  useEffect(() => {
    setPokemon(POKEMONS)
  },[])
  return (
    <div>
      <h1>il y'a {pokemons.length} pokemons!! </h1>
      <ul>
      {
        pokemons.map((pok) => <li key={pok.id}>{pok.name}</li>)
      }
      </ul>
    </div>
  );
};

export default App;