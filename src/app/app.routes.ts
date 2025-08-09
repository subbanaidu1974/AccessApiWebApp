import { Routes } from '@angular/router';

import { Home } from './modules/general/home/home';
import { NotFound } from './modules/general/not-found/not-found';
import { Apis } from './modules/general/apis/apis';
import { TaxAgenciesApi } from './modules/general/tax-agencies-api/tax-agencies-api';

export const routes: Routes = [
  { path: '', component: Home, },
  {
    path: 'login',
    loadComponent: () => import(`./modules/general/login/login`)
      .then(mod => mod.Login)
  },
  {
    path: 'signup',
    loadComponent: () => import(`./modules/general/signup/signup`)
      .then(mod => mod.Signup)
  },
  {
    path: 'apis',
    loadComponent: () => import('./modules/general/apis/apis')
      .then(m => m.Apis)
  },
  {
    path: 'tax-agencies-api',
    loadComponent: () => import('./modules/general/tax-agencies-api/tax-agencies-api')
      .then(m => m.TaxAgenciesApi)
  },
  { path: '**', component: NotFound }
];