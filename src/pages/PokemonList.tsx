import { FunctionComponent, useEffect, useState } from "react";
//import POKEMONS from "../models/mock-pokemon";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import Pokemon from "../models/pokemon";

const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemons")
      .then((response) => response.json())
      .then((pokemons) => setPokemons(pokemons));
  }, []);

  return (
    <div>
      <h1 className="center">Pokedex</h1>
      <div className="container">
        <div className="row">
          {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
