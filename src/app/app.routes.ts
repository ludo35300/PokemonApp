import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  {
    path: '',
    // provider: [PokemonService],
    loadChildren: () => import('./pokemon/pokemon.route').then(module => module.pokemonRoutes)
  },
  {
    path: '**',
    loadComponent: () => import('./page-not-found/page-not-found.component').then(module => module.PageNotFoundComponent)
  }
];