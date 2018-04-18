import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BOOKS } from '../books.model';
import { Book } from '../book/book';
import { MainBoardService } from './main-board.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { OrderByNamePipe } from '../order-by-name.pipe';
import {Router } from '@angular/router';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})

export class MainBoardComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Book>(BOOKS);
  displayedColumns = ['id', 'name', 'date_of_publication', 'button'];
  public books = BOOKS;
  constructor(private mainBoardService: MainBoardService,
              private orderName: OrderByNamePipe,
              private router: Router) { }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  storeBookId(book): void {
    this.router.navigate(['/book', { id: book.id }]);
  }
  togglePipe() {
    this.orderName.transform(BOOKS);
  }

}

