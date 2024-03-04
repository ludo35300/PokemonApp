
import { Routes } from '@angular/router';
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";

import { AuthGuard } from '../auth.guard';

export const pokemonRoutes: Routes = [

  {
    path: 'pokemons',
    component: ListPokemonComponent,
    canActivate: [AuthGuard],
    title: 'Liste des Pokémons'
  },
  {
    path: 'pokemon/:id',
    component: DetailPokemonComponent,
    canActivate: [AuthGuard]
  }
];