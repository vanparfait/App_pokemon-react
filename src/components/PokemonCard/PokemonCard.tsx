import { FunctionComponent, useState } from "react";
import "./PokemonCard.css";
import { Link, useNavigate } from "react-router-dom";
import Pokemon from "../../models/pokemon";
import formatType from "../../helpers/formatType";
import { formatDate } from "../../helpers/formatDate";

type Props = {
  pokemon: Pokemon;
  borderColor?: string;
};

const PokemonCard: FunctionComponent<Props> = ({
  pokemon,
  borderColor = "#009688",
}) => {
  const [color, setColor] = useState<string>();

  const showBorder = () => {
    setColor(borderColor);
  };

  const hideBorder = () => {
    setColor("#f5f5f5");
  };

  const navigate = useNavigate();

  const goToPokemon = (id: number) => {
    navigate(`/pokemons/${id}`);
  };

  return (
    <Link to={`pokemons/${pokemon.id}`}>
      <div
        className="col s6 m4"
        onMouseEnter={showBorder}
        onMouseLeave={hideBorder}
        onClick={() => goToPokemon(pokemon.id)}
      >
        <div className="card horizontal" style={{ borderColor: color }}>
          <div className="card-image">
            <img src={pokemon.picture} alt={pokemon.name} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{pokemon.name}</p>
              <p>
                <small>{formatDate(pokemon.created)}</small>
              </p>
              {pokemon.types && Array.isArray(pokemon.types) ? (
                pokemon.types.map((type) => (
                  <span key={type} className={formatType(type)}>
                    {type}
                  </span>
                ))
              ) : (
                <p>No types available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
