import { FunctionComponent } from "react";
import PokemonList from "./pages/PokemonList";
import PokemonsDetail from "./pages/PokemonsDetail";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import PokemonEdit from "./pages/PokemonEdit";
import PokemonAdd from "./pages/PokemonAdd";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">
              Pokedex
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemons" element={<PokemonList />} />
          <Route path="/pokemons/add" element={<PokemonAdd />} />
          <Route path="/pokemons/:id" element={<PokemonsDetail />} />
          <Route path="/pokemons/edit/:id" element={<PokemonEdit />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
