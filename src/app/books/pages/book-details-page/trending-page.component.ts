import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-trending-page',
  imports: [FormsModule],
  templateUrl: './trending-page.component.html',
  styles: ``
})
export default class TrendingPageComponent {
  
  private booksService = inject(BooksService);
  
  workId = '';
  
  get bookDetails() {
    return this.booksService.bookDetails;
  }

  getBookDetails() {
    if (this.workId.trim()) {
      this.booksService.getBookDetails(this.workId.trim());
    }
  }
}
