import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'account',
    title: 'Account settings',
    loadComponent: async () => (await import('./account/account.page')).AccountPage,
  }
];
