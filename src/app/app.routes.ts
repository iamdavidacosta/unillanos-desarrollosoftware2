import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./books/pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'search-books',
        loadComponent: () => import('./books/pages/book-search-page/search-page.component')
      },
      {
        path: 'book-details',
        loadComponent: () => import('./books/pages/book-details-page/book-details-page.component')
      },
      {
        path: 'authors',
        loadComponent: () => import('./books/pages/authors-page/authors-page.component')
      },
      {
        path: '**',
        redirectTo: 'search-books',
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];
