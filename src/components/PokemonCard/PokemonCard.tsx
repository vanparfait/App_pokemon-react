import { FunctionComponent } from "react";
import Pokemon from "../../models/pokemon";
import "./PokemonCard.css";

type props = {
  pokemon: Pokemon;
  borderColor?: string;
};

const PokemonCard: FunctionComponent<props> = ({
  pokemon,
  borderColor = "#009688",
}) => {
  return (
    <div className="col s6 m4" key={pokemon.id}>
      <div className="card horizontal" style={{ borderColor: borderColor }}>
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p>
              <small> {pokemon.created.toString()} </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
