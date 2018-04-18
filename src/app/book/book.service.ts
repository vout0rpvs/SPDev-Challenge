import { Injectable } from '@angular/core';
import { BOOKS } from '../books.model';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BookService {
  private books = BOOKS;
  constructor() { }
  updateBook(book) {
    const oldBook = book;
    const newBook = Object.assign(oldBook, book); // Demo: mutate cached hero
    return of(newBook); // simulate latency with delay
  }

}
