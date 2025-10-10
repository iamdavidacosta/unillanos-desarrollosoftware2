import {Component, input} from '@angular/core';
import {BookListItemComponent} from './book-list-item/book-list-item.component';
import {Book} from '../../interfaces/book.interfaces';

@Component({
  selector: 'book-list',
  imports: [
    BookListItemComponent
  ],
  templateUrl: './book-list.component.html',
  styles: ``
})
export class BookListComponent {
  books = input.required<Book[]>();
}
