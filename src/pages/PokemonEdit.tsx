import { FunctionComponent, useState, useEffect } from "react";

import Pokemon from "../models/pokemon";
//import POKEMONS from "../models/mock-pokemon";
import PokemonForm from "../components/PokemonForm/PokemonForm";
import { useParams } from "react-router-dom";

type Params = { id: string };

const PokemonEdit: FunctionComponent = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const { id } = useParams<Params>();

  useEffect(() => {
    fetch(`http://localhost:3001/pokemons/${id}`)
      .then((response) => response.json())
      .then((pokemon) => {
        pokemon.id && setPokemon(pokemon);
      });
  }, [id]);

  return (
    <div>
      {pokemon ? (
        <div className="row">
          <h2 className="header center">Éditer {pokemon.name}</h2>
          <PokemonForm pokemon={pokemon}></PokemonForm>
        </div>
      ) : (
        <h4 className="center">Aucun pokémon à afficher !</h4>
      )}
    </div>
  );
};

export default PokemonEdit;
