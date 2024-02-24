import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';


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
