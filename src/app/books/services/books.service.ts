import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private http = inject(HttpClient);
  
  // Signals para los 3 servicios
  searchResults = signal<any[]>([]);
  bookDetails = signal<any>(null);
  authorResults = signal<any[]>([]);

  // Servicio 1: Búsqueda de libros
  searchBooks(query: string) {
    this.http.get(`${environment.urlBase}/search.json`, {
      params: {
        q: query,
        limit: '20'
      }
    }).subscribe((response: any) => {
      this.searchResults.set(response.docs || []);
    });
  }

  // Servicio 2: Detalles de un libro por ID
  getBookDetails(id: string) {
    this.http.get(`${environment.urlBase}${id}.json`)
      .subscribe((response: any) => {
        this.bookDetails.set(response);
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
      // Extraer autores con la info que quieres
      const result: any[] = [];
      
      response.docs?.forEach((author: any) => {
        result.push({
          name: author.name,
          top_work: author.top_work,
          work_count: author.work_count,
          key: author.key,
          id: author.key
        });
      });
      
      this.authorResults.set(result);
    });
  }
}
