import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import {SearchResponse, WorkResponse, AuthorResponse} from '../interfaces/openlibrary.interfaces';
import {Book} from '../interfaces/book.interfaces';
import {Author} from '../interfaces/author.interfaces';
import {BookMapper} from '../mapper/book.mapper';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private http = inject(HttpClient);
  
  // Signals para los 3 servicios
  searchResults = signal<Book[]>([]);
  bookDetails = signal<Book | null>(null);
  authorResults = signal<Author[]>([]);

  constructor() { }

  // Servicio 1: Búsqueda de libros
  searchBooks(query: string) {
    if (!query.trim()) {
      this.searchResults.set([]);
      return;
    }

    this.http.get<SearchResponse>(`${environment.urlBase}/search.json`, {
      params: {
        q: query,
        limit: 20
      }
    }).subscribe((response) => {
      const books = BookMapper.mapSearchBooksToBookArray(response.docs);
      this.searchResults.set(books);
      console.log('Search results:', books);
    });
  }

  // Servicio 2: Detalles de un libro por Work ID
  getBookDetails(workId: string) {
    this.http.get<WorkResponse>(`${environment.urlBase}${workId}.json`)
      .subscribe((response) => {
        const book = BookMapper.mapWorkResponseToBook(response);
        this.bookDetails.set(book);
        console.log('Book details:', book);
      });
  }

  // Servicio 3: Búsqueda de autores
  searchAuthors(query: string) {
    if (!query.trim()) {
      this.authorResults.set([]);
      return;
    }

    console.log('Searching authors for:', query);

    // Usar search.json pero buscando por autor específicamente
    this.http.get<SearchResponse>(`${environment.urlBase}/search.json`, {
      params: {
        author: query,
        limit: 10
      }
    }).subscribe((response) => {
      console.log('Author search response:', response);
      
      // Extraer autores únicos de los resultados de libros
      const uniqueAuthors = new Map<string, Author>();
      
      response.docs.forEach(book => {
        if (book.author_name && book.author_name.length > 0) {
          book.author_name.forEach(authorName => {
            if (authorName.toLowerCase().includes(query.toLowerCase()) && !uniqueAuthors.has(authorName)) {
              uniqueAuthors.set(authorName, {
                id: `author_${authorName.replace(/\s+/g, '_')}`,
                name: authorName,
                bio: `Autor de "${book.title}"${book.first_publish_year ? ` (${book.first_publish_year})` : ''}`
              });
            }
          });
        }
      });
      
      const authors = Array.from(uniqueAuthors.values()).slice(0, 10);
      this.authorResults.set(authors);
      console.log('Mapped authors:', authors);
    }, (error) => {
      console.error('Error searching authors:', error);
      this.authorResults.set([]);
    });
  }
}
