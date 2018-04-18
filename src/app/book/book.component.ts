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
  private books = BOOKS;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => this.paramMap = params);

  }
  cancel() {
    return this.books;
  }
}
