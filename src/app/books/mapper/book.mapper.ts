import { SearchBook, WorkResponse, AuthorResponse } from '../interfaces/openlibrary.interfaces';
import { Book } from '../interfaces/book.interfaces';
import { Author } from '../interfaces/author.interfaces';

export class BookMapper {

  static mapSearchBookToBook(item: SearchBook): Book {
    return {
      id: item.key,
      title: item.title,
      author: item.author_name ? item.author_name[0] : 'Autor desconocido',
      cover_url: item.cover_i ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg` : undefined,
      first_publish_year: item.first_publish_year
    }
  }

  static mapSearchBooksToBookArray(items: SearchBook[]): Book[] {
    return items.map(this.mapSearchBookToBook);
  }

  static mapWorkResponseToBook(work: WorkResponse): Book {
    return {
      id: work.key,
      title: work.title,
      author: 'Ver detalles',
      cover_url: work.covers && work.covers[0] ? `https://covers.openlibrary.org/b/id/${work.covers[0]}-M.jpg` : undefined,
      first_publish_year: work.first_publish_date ? parseInt(work.first_publish_date.split('-')[0]) : undefined
    }
  }

  static mapAuthorResponseToAuthor(author: AuthorResponse): Author {
    return {
      id: author.key,
      name: author.name,
      birth_date: author.birth_date,
      death_date: author.death_date,
      bio: typeof author.bio === 'string' ? author.bio : author.bio?.value,
      photo_url: author.photos && author.photos[0] ? `https://covers.openlibrary.org/a/id/${author.photos[0]}-M.jpg` : undefined
    }
  }

}
