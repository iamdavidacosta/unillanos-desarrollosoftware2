import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GifsService } from '../../services/gifs.service';
import { GifListComponent } from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'app-search-page',
  imports: [FormsModule, GifListComponent],
  templateUrl: './search-page.component.html',
  styles: ``
})
export default class SearchPageComponent {
  
  private gifsService = inject(GifsService);
  
  searchTerm = '';
  
  get searchResults() {
    return this.gifsService.searchResults;
  }

  onSearch() {
    if (this.searchTerm.trim()) {
      this.gifsService.searchGifs(this.searchTerm.trim());
    }
  }
}
