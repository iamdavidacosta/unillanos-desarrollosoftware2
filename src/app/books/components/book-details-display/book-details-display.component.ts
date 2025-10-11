import { Component, input } from '@angular/core';
import { BookDetails } from '../../interfaces/book.interfaces';

@Component({
  selector: 'book-details-display',
  imports: [],
  templateUrl: './book-details-display.component.html',
  styles: ``
})
export class BookDetailsDisplayComponent {
  bookDetails = input.required<BookDetails>();

  get description(): string {
    const desc = this.bookDetails().description;
    if (typeof desc === 'string') {
      return desc;
    } else if (desc && typeof desc === 'object' && 'value' in desc) {
      return desc.value;
    }
    return "Sin descripción";
  }
}