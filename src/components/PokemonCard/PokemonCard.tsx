import { FunctionComponent, useState } from "react";
import Pokemon from "../../models/pokemon";
import "./PokemonCard.css";
import { formatDate } from "../../helpers/formatDate";
import formatType from "../../helpers/formatType";
import { Link } from "react-router-dom";

type props = {
  pokemon: Pokemon;
  borderColor?: string;
};

const PokemonCard: FunctionComponent<props> = ({
  pokemon,
  borderColor = "#009688",
}) => {
  const [color, setColor] = useState<string>();

  function showBorder() {
    setColor(borderColor);
  }

  function hideBorder() {
    setColor("#f5f5f5");
  }

  return (
    <div
      className="col s6 m4"
      onMouseEnter={showBorder}
      onMouseLeave={hideBorder}
    >
      <Link to={`pokemons/${pokemon.id}`}>
        <div className="card horizontal" style={{ borderColor: color }}>
          <div className="card-image">
            <img src={pokemon.picture} alt={pokemon.name} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{pokemon.name}</p>
              <p>
                <small> {formatDate(pokemon.created)} </small>
              </p>

              {pokemon.types.map((type) => (
                <span key={type} className={formatType(type)}>
                  {type}{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
