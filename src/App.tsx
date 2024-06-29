// import { FunctionComponent } from "react";
// import PokemonList from "./pages/PokemonList";
// import PokemonsDetail from "./pages/PokemonsDetail";
// import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
// import PageNotFound from "./pages/PageNotFound";
// import PokemonEdit from "./pages/PokemonEdit";
// import PokemonAdd from "./pages/PokemonAdd";
// import Login from "./pages/Login";
// import PrivateRoute from "./PrivateRoute";

// const App: FunctionComponent = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <div className="nav-wrapper teal">
//             <Link to="/" className="brand-logo center">
//               Pokedex
//             </Link>
//           </div>
//         </nav>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <PrivateRoute path="/" element={<PokemonList />} />
//           <PrivateRoute path="/pokemons" element={<PokemonList />} />
//           <PrivateRoute path="/pokemons/add" element={<PokemonAdd />} />
//           <PrivateRoute path="/pokemons/:id" element={<PokemonsDetail />} />
//           <PrivateRoute path="/pokemons/edit/:id" element={<PokemonEdit />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import { FunctionComponent } from "react";
import PokemonList from "./pages/PokemonList";
import PokemonsDetail from "./pages/PokemonsDetail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import PokemonEdit from "./pages/PokemonEdit";
import PokemonAdd from "./pages/PokemonAdd";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute";

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
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemons" element={<PokemonList />} />
            <Route path="/pokemons/add" element={<PokemonAdd />} />
            <Route path="/pokemons/:id" element={<PokemonsDetail />} />
            <Route path="/pokemons/edit/:id" element={<PokemonEdit />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
