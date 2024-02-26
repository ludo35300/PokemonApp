import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'troupes', pathMatch: 'full' },
  {
    path: '',
    // provider: [TroupeService],
    loadChildren: () => import('./troupe/troupe.route').then(module => module.pokemonRoutes)
  },
  {
    path: '**',
    loadComponent: () => import('./page-not-found/page-not-found.component').then(module => module.PageNotFoundComponent)
  }
];