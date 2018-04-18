import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book/book';
import { MainBoardService } from './main-board/main-board.service';

@Pipe({
  name: 'orderByName',
  pure: false
})
export class OrderByNamePipe implements PipeTransform {

  constructor ( private mainBoardService: MainBoardService) {}

  transform(value: Book[]): Book[] {
    this.mainBoardService.sortBooks();
    return this.mainBoardService.books;
  }

}
