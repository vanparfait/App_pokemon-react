// /* Version de PRODUCTION */
// import Pokemon from "../models/pokemon";
// import POKEMONS from "../models/mock-pokemon";
  
// export default class PokemonService {
  
//   static pokemons:Pokemon[] = POKEMONS;
  
//   static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
  
//   static getPokemons(): Promise<Pokemon[]> {
//     if(this.isDev) {
//       return fetch('http://localhost:3001/pokemons')
//       .then(response => response.json())
//       .catch(error => this.handleError(error));
//     }
  
//     return new Promise(resolve => {
//       resolve(this.pokemons);
//     });
//   }
  
//   static getPokemon(id: number): Promise<Pokemon|null> {
//     if(this.isDev) {
//       return fetch(`http://localhost:3001/pokemons/${id}`)
//       .then(response => response.json())
//       .then(data => this.isEmpty(data) ? null : data)
//       .catch(error => this.handleError(error));
//     }
  
//     return new Promise(resolve => {    
//       resolve(this.pokemons.find(pokemon => id === pokemon.id));
//     }); 
//   }
  
//   static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
//     if(this.isDev) {
//       return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
//         method: 'PUT',
//         body: JSON.stringify(pokemon),
//         headers: { 'Content-Type': 'application/json'}
//       })
//       .then(response => response.json())
//       .catch(error => this.handleError(error));
//     }
  
//     return new Promise(resolve => {
//       const { id } = pokemon;
//       const index = this.pokemons.findIndex(pokemon => pokemon.id === id);
//       this.pokemons[index] = pokemon;
//       resolve(pokemon);
//     }); 
//   }
  
//   static deletePokemon(pokemon: Pokemon): Promise<{}> {
//     if(this.isDev) {
//       return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json'}
//       })
//       .then(response => response.json())
//       .catch(error => this.handleError(error));
//     }
  
//     return new Promise(resolve => {    
//       const { id } = pokemon;
//       this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== id);
//       resolve({});
//     }); 
//   }
  
//   static addPokemon(pokemon: Pokemon): Promise<Pokemon> {
//     pokemon.created = new Date(pokemon.created);
  
//     if(this.isDev) {
//       return fetch(`http://localhost:3001/pokemons`, {
//         method: 'POST',
//         body: JSON.stringify(pokemon),
//         headers: { 'Content-Type': 'application/json'}
//       })
//       .then(response => response.json())
//       .catch(error => this.handleError(error));
//     }
  
//     return new Promise(resolve => {    
//       this.pokemons.push(pokemon);
//       resolve(pokemon);
//     }); 
//   }
  
//   static searchPokemon(term: string): Promise<Pokemon[]> {
//     if(this.isDev) {
//       return fetch(`http://localhost:3001/pokemons?q=${term}`)
//       .then(response => response.json())
//       .catch(error => this.handleError(error));
//     }
  
//     return new Promise(resolve => {    
//       const results = this.pokemons.filter(pokemon => pokemon.name.includes(term));
//       resolve(results);
//     });
  
//   }
  
//   static isEmpty(data: Object): boolean {
//     return Object.keys(data).length === 0;
//   }
  
//   static handleError(error: Error): void {
//     console.error(error);
//   }
// }

import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemon";

export default class PokemonService {
  static pokemons: Pokemon[] = POKEMONS;
  static isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');

  static getPokemons(): Promise<Pokemon[]> {
    if (PokemonService.isDev) {
      return fetch('http://localhost:3001/pokemons')
        .then(response => response.json())
        .catch(error => PokemonService.handleError(error));
    }

    return new Promise(resolve => {
      resolve(PokemonService.pokemons);
    });
  }

  static getPokemon(id: number): Promise<Pokemon | null> {
    if (PokemonService.isDev) {
      return fetch(`http://localhost:3001/pokemons/${id}`)
        .then(response => response.json())
        .then(data => PokemonService.isEmpty(data) ? null : data)
        .catch(error => PokemonService.handleError(error));
    }

    return new Promise(resolve => {
      const pokemon = PokemonService.pokemons.find(pokemon => id === pokemon.id);
      resolve(pokemon || null);
    });
  }

  static updatePokemon(pokemon: Pokemon): Promise<Pokemon> {
    if (PokemonService.isDev) {
      return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
        method: 'PUT',
        body: JSON.stringify(pokemon),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .catch(error => PokemonService.handleError(error));
    }

    return new Promise((resolve, reject) => {
      const { id } = pokemon;
      const index = PokemonService.pokemons.findIndex(p => p.id === id);
      if (index !== -1) {
        PokemonService.pokemons[index] = pokemon;
        resolve(pokemon);
      } else {
        reject(new Error('Pokemon not found'));
      }
    });
  }

  static deletePokemon(pokemon: Pokemon): Promise<{}> {
    if (PokemonService.isDev) {
      return fetch(`http://localhost:3001/pokemons/${pokemon.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .catch(error => PokemonService.handleError(error));
    }

    return new Promise((resolve, reject) => {
      const { id } = pokemon;
      const index = PokemonService.pokemons.findIndex(p => p.id === id);
      if (index !== -1) {
        PokemonService.pokemons.splice(index, 1);
        resolve({});
      } else {
        reject(new Error('Pokemon not found'));
      }
    });
  }

  static addPokemon(pokemon: Pokemon): Promise<Pokemon> {
    pokemon.created = new Date(pokemon.created);

    if (PokemonService.isDev) {
      return fetch(`http://localhost:3001/pokemons`, {
        method: 'POST',
        body: JSON.stringify(pokemon),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .catch(error => PokemonService.handleError(error));
    }

    return new Promise(resolve => {
      PokemonService.pokemons.push(pokemon);
      resolve(pokemon);
    });
  }

  static searchPokemon(term: string): Promise<Pokemon[]> {
    if (PokemonService.isDev) {
      return fetch(`http://localhost:3001/pokemons?q=${term}`)
        .then(response => response.json())
        .catch(error => PokemonService.handleError(error));
    }

    return new Promise(resolve => {
      const results = PokemonService.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(term.toLowerCase()));
      resolve(results);
    });
  }

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static handleError(error: Error): void {
    console.error(error);
  }
}
