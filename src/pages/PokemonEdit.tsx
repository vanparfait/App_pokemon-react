// import { FunctionComponent, useState, useEffect } from "react";

// import Pokemon from "../models/pokemon";
// //import POKEMONS from "../models/mock-pokemon";
// import PokemonForm from "../components/PokemonForm/PokemonForm";
// import { useParams } from "react-router-dom";
// import PokemonService from "../services/pokemonServive";
// import Loader from "../components/Loader";

// type Params = { id: string };

// const PokemonEdit: FunctionComponent = () => {
//   const [pokemon, setPokemon] = useState<Pokemon | null>(null);
//   //const [error, setError] = useState(null);

//   const { id } = useParams<Params>();

//   useEffect(() => {
//     // Effacer l'erreur précédente
//     // setError(null);

//     // fetch(`http://localhost:3001/pokemons/${id}`)
//     //   .then((response) => {
//     //     if (!response.ok) {
//     //       // Si la réponse n'est pas correcte, rejeter la promesse avec un message d'erreur
//     //       throw new Error(`HTTP error! status: ${response.status}`);
//     //     }
//     //     return response.json();
//     //   })
//     //   .then((pokemon) => {
//     //     if (pokemon.id) {
//     //       setPokemon(pokemon);
//     //     } else {
//     //       throw new Error("Invalid Pokemon data");
//     //     }
//     //   })
//     //   .catch((error) => setError(error.message));
//     PokemonService.getPokemon(id).then((pokemon) => setPokemon(pokemon));
//   }, [id]);

//   return (
//     <div>
//       {pokemon ? (
//         <div className="row">
//           <h2 className="header center">Éditer {pokemon.name}</h2>
//           <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
//         </div>
//       ) : (
//         <h4 className="center">
//           <Loader />
//         </h4>
//       )}
//     </div>
//   );
// };

// export default PokemonEdit;

import { FunctionComponent, useState, useEffect } from "react";
import Pokemon from "../models/pokemon";
import PokemonForm from "../components/PokemonForm/PokemonForm";
import { useParams } from "react-router-dom";
import PokemonService from "../services/pokemonServive";
import Loader from "../components/Loader";

type Params = { id: string };

const PokemonEdit: FunctionComponent = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const { id } = useParams<Params>();

  useEffect(() => {
    if (id) {
      const numericId = parseInt(id, 10);
      PokemonService.getPokemon(numericId).then((pokemon) =>
        setPokemon(pokemon)
      );
    }
  }, [id]);

  return (
    <div>
      {pokemon ? (
        <div className="row">
          <h2 className="header center">Éditer {pokemon.name}</h2>
          <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
        </div>
      ) : (
        <h4 className="center">
          <Loader />
        </h4>
      )}
    </div>
  );
};

export default PokemonEdit;
