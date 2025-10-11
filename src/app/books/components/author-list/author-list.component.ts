import { Component, input } from '@angular/core';
import { AuthorSearchResult } from '../../interfaces/author.interfaces';

@Component({
  selector: 'author-list',
  imports: [],
  templateUrl: './author-list.component.html',
  styles: ``
})
export class AuthorListComponent {
  authors = input.required<AuthorSearchResult[]>();
}