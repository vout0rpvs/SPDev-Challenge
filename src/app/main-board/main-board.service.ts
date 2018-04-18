import { Injectable } from '@angular/core';
import { Book } from '../book/book';
import { BOOKS } from '../books.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MainBoardService {
  pathToBooks = '../books.model.ts';
  books = BOOKS;
  constructor() { }
  getBooks(): Book[] {
    return this.books;
  }
  sortBooks(): any {
    this.books.sort( (a: Book , b: Book ) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0 );
  }
}
