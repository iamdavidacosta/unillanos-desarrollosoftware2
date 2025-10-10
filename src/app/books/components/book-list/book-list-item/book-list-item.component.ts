import {Component, input} from '@angular/core';
import { Book } from '../../../interfaces/book.interfaces';

@Component({
  selector: 'book-list-item',
  imports: [],
  templateUrl: './book-list-item.component.html',
  styles: ``
})
export class BookListItemComponent {
  book = input.required<Book>();
}
