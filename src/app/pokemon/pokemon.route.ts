import { Routes } from "@angular/router";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";

export const pokemonRoutes: Routes = [
    { 
      path: 'pokemons', 
      loadComponent: () => import('./list-pokemon/list-pokemon.component').then(module => ListPokemonComponent),
    },
    { 
      path: 'pokemon/:id', 
      loadComponent: () => import('./detail-pokemon/detail-pokemon.component').then(module => DetailPokemonComponent),    
    }
  ];