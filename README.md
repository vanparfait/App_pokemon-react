# Pokémon App

Une application de gestion de Pokémon utilisant React, TypeScript et JSON Server pour le backend. Cette application permet de rechercher, ajouter, modifier et supprimer des Pokémon.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Scripts Disponibles](#scripts-disponibles)
- [Structure du Projet](#structure-du-projet)
- [Contribuer](#contribuer)
- [License](#license)

## Fonctionnalités

- Afficher une liste de Pokémon.
- Rechercher un Pokémon par nom.
- Ajouter un nouveau Pokémon.
- Modifier un Pokémon existant.
- Supprimer un Pokémon.

## Installation

1. **Cloner le dépôt** :

   ```bash
   git clone https://github.com/votre-utilisateur/pokemon-app.git
   cd pokemon-app
   ```

2. **Installer les dépendances** :

   ```bash
   npm install
   ```

3. **Configurer le backend** :

   Utilisez JSON Server pour simuler une API REST :

   ```bash
   npx json-server --watch db.json --port 3001
   ```

   Le fichier `db.json` devrait contenir des données initiales pour les Pokémon, par exemple :

   ```json
   {
     "pokemons": [
       {
         "id": 1,
         "name": "Bulbasaur",
         "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
         "created": "2023-01-01"
       }
       // Autres Pokémon...
     ]
   }
   ```

## Utilisation

1. **Démarrer l'application** :

   ```bash
   npm run dev
   ```

   L'application sera accessible à l'adresse `http://localhost:5173`.

2. **Naviguer dans l'application** :

   - Accueil : Affiche une liste de tous les Pokémon.
   - Recherche : Utilisez la barre de recherche pour trouver un Pokémon par nom.
   - Détails : Cliquez sur un Pokémon pour voir plus de détails.
   - Ajouter : Utilisez le formulaire pour ajouter un nouveau Pokémon.
   - Modifier : Modifiez les informations d'un Pokémon existant.
   - Supprimer : Supprimez un Pokémon de la liste.

## Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter :

- `npm run dev` : Démarre l'application en mode développement.
- `npm run build` : Construit l'application pour la production dans le dossier `build`.
- `npm test` : Lance les tests.
- `npx json-server --watch db.json --port 3001` ou `npm run start:api` : Démarre JSON Server pour simuler une API REST.

## Structure du Projet

```plaintext
pokemon-app/
├── public/
├── src/
│   ├── components/
│   │   ├── PokemonCard/
│   │   │   └── PokemonCard.tsx
│   ├── models/
│   │   └── pokemon.ts
│   ├── services/
│   │   └── pokemonService.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── db.json
├── package.json
├── README.md
└── ...
```
