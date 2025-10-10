import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-search-page',
  imports: [FormsModule],
  templateUrl: './search-page.component.html'
})
export default class SearchPageComponent {
  
  private booksService = inject(BooksService);
  
  searchTerm = '';
  
  get searchResults() {
    return this.booksService.searchResults;
  }

  onSearch() {
    this.booksService.searchBooks(this.searchTerm);
  }
}
