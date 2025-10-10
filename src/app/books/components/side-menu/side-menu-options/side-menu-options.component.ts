import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

interface MenuOption {
  label: string;
  sublabel: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'books-side-menu-options',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-menu-options.component.html',
  styles: ``
})
export class SideMenuOptionsComponent {
  menuOptions: MenuOption[] = [
    {
      label: 'Buscar Libros',
      sublabel: 'Encuentra libros',
      icon: 'fa-solid fa-book',
      route: '/dashboard/search-books'
    },
    {
      label: 'Detalles Libro',
      sublabel: 'Info específica',
      icon: 'fa-solid fa-info-circle',
      route: '/dashboard/book-details'
    },
    {
      label: 'Autores',
      sublabel: 'Buscar autores',
      icon: 'fa-solid fa-user-pen',
      route: '/dashboard/authors'
    }
  ]
}
