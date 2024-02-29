import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  {
    path: '',
    loadChildren: () => import('./pokemon/pokemon.route').then(module => module.pokemonRoutes)
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];