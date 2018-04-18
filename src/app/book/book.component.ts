import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BOOKS } from '../books.model';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  private paramMap: any;
  private isEditing = false;
  private books = BOOKS;
  private singleBook: any;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => this.paramMap = params);
    this.singleBook = this.books.filter(book => book.id == this.paramMap.params.id);
    const copy = { ...this.singleBook };
  }
  cancel() {
    return this.books;
  }
}
