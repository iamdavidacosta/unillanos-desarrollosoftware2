import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-details-page',
  imports: [FormsModule],
  templateUrl: './book-details-page.component.html'
})
export default class BookDetailsPageComponent {
  
  private booksService = inject(BooksService);
  
  bookId = '';
  
  get bookDetails() {
    return this.booksService.bookDetails;
  }

  getBookDetails() {
    this.booksService.getBookDetails(this.bookId);
  }
}
