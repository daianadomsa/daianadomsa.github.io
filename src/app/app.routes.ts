import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Domșa Daiana — Portofoliu',
    loadComponent: () => import('./features/home/home').then((module) => module.Home),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
