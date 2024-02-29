
import {  Routes } from '@angular/router';
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { AddPokemonComponent } from "./add-pokemon/add-pokemon.component";
import { AuthGuard } from '../auth.guard';

export const pokemonRoutes: Routes = [
  {
    path: 'edit/pokemon/:id',
    component: EditPokemonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pokemons/pokemon/add',
    component: AddPokemonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pokemons',
    component: ListPokemonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pokemon/:id',
    component: DetailPokemonComponent,
    canActivate: [AuthGuard]
  }
];