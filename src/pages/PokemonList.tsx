import { FunctionComponent, useEffect, useState } from "react";
//import POKEMONS from "../models/mock-pokemon";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import Pokemon from "../models/pokemon";
import PokemonService from "../services/pokemonServive";
import { Link } from "react-router-dom";

const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    PokemonService.getPokemons().then((pokemons) => setPokemons(pokemons));
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
        <Link
          to="/pokemons/add"
          className="btn-floating btn-large waves-effect wave-light red z-depth-3"
          style={{ position: "fixed", bottom: "25px", right: "25px" }}
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default PokemonList;
