import { FunctionComponent, useState } from "react";
import Pokemon from "../models/pokemon";
import PokemonForm from "../components/PokemonForm/PokemonForm";

const PokemonAdd: FunctionComponent = () => {
  const [id] = useState<number>(new Date().getTime());
  const [pokemon] = useState<Pokemon>(new Pokemon(id));
  return (
    <div className="row">
      <h2 className="header center">Ajouter un Pokemon</h2>
      <PokemonForm isEditForm={false} pokemon={pokemon} />
    </div>
  );
};

export default PokemonAdd;
