import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import { Book, BookDetails } from '../interfaces/book.interfaces';
import { AuthorSearchResult } from '../interfaces/author.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private http = inject(HttpClient);
  
  // Signals para los 3 servicios
  searchResults = signal<Book[]>([]);
  bookDetails = signal<BookDetails | null>(null);
  authorResults = signal<AuthorSearchResult[]>([]);

  // Servicio 1: Búsqueda de libros
  searchBooks(query: string) {
    this.http.get(`${environment.urlBase}/search.json`, {
      params: {
        q: query,
        limit: '20'
      }
    }).subscribe((response: any) => {
      const books: Book[] = response.docs?.map((item: any) => ({
        id: item.key,
        title: item.title,
        author: item.author_name ? item.author_name[0] : 'Autor desconocido',
        cover_url: item.cover_i ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg` : undefined,
        first_publish_year: item.first_publish_year
      })) || [];
      
      this.searchResults.set(books);
    });
  }

  // Servicio 2: Detalles de un libro por ID
  getBookDetails(id: string) {
    this.http.get(`${environment.urlBase}${id}.json`)
      .subscribe((response: any) => {
        const bookDetails: BookDetails = {
          key: response.key,
          title: response.title,
          description: response.description,
          covers: response.covers,
          first_publish_date: response.first_publish_date
        };
        this.bookDetails.set(bookDetails);
      });
  }

  // Servicio 3: Búsqueda de autores
  searchAuthors(query: string) {
    this.http.get(`${environment.urlBase}/search/authors.json`, {
      params: {
        q: query,
        limit: '10'
      }
    }).subscribe((response: any) => {
      const result: AuthorSearchResult[] = [];
      
      response.docs?.forEach((author: any) => {
        result.push({
          key: author.key,
          name: author.name,
          top_work: author.top_work,
          work_count: author.work_count
        });
      });
      
      this.authorResults.set(result);
    });
  }
}
