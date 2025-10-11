import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { AuthorListComponent } from '../../components/author-list/author-list.component';

@Component({
  selector: 'app-authors-page',
  imports: [FormsModule, AuthorListComponent],
  templateUrl: './authors-page.component.html'
})
export default class AuthorsPageComponent {
  
  private booksService = inject(BooksService);
  
  searchTerm = '';
  
  get authorResults() {
    return this.booksService.authorResults;
  }

  onSearch() {
    this.booksService.searchAuthors(this.searchTerm);
  }
}