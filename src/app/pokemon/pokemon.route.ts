
import {  Routes } from '@angular/router';
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { AddPokemonComponent } from "./add-pokemon/add-pokemon.component";

export const pokemonRoutes: Routes = [
  {
    path: 'edit/pokemon/:id',
    loadComponent: () => import('./edit-pokemon/edit-pokemon.component').then(module => EditPokemonComponent),
  },
  {
    path: 'pokemons/pokemon/add',
    loadComponent: () => import('./add-pokemon/add-pokemon.component').then(module => AddPokemonComponent),
  },
  {
    path: 'pokemons',
    loadComponent: () => import('./list-pokemon/list-pokemon.component').then(module => ListPokemonComponent),
  },
  {
    path: 'pokemon/:id',
    loadComponent: () => import('./detail-pokemon/detail-pokemon.component').then(module => DetailPokemonComponent),
  }
];