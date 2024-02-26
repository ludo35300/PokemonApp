import { Routes } from "@angular/router";
import { ListTroupeComponent } from "./list-troupe/list-troupe.component";
import { DetailTroupeComponent } from "./detail-troupe/detail-troupe.component";

export const pokemonRoutes: Routes = [
  {
    path: 'troupes',
    loadComponent: () => import('./list-troupe/list-troupe.component').then(module => ListTroupeComponent),
  },
  {
    path: 'troupe/:id',
    loadComponent: () => import('./detail-troupe/detail-troupe.component').then(module => DetailTroupeComponent),
  }
];