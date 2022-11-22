import { Routes } from '@angular/router';
import { AuthGuard, NoAuthGuard } from './shared/guards';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: async () => (await import('@pages/auth/auth.routing')).ROUTES,
    canLoad: [NoAuthGuard],
  },
  {
    path: 'home',
    loadChildren: async () => (await import('@pages/home/home.routing')).ROUTES,
    canLoad: [AuthGuard],
  },
  {
    path: ':username',
    loadChildren: async () => (await import('@pages/profile/profile.routing')).ROUTES,
    canLoad: [AuthGuard],
  },
  {
    path: 'settings',
    loadChildren: async () => (await import('@pages/settings/settings.routing')).ROUTES,
    canLoad: [AuthGuard],
  },
  {
    path: '**',
    loadComponent: async () => (await import('@pages/screens/not-found/not-found.page')).NotFoundPage,
  },
];
