import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BOOKS } from '../books.model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from './book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnChanges {
  bookForm: FormGroup;
  private paramMap: any;
  private books = BOOKS;
  private singleBook: any;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private bookService: BookService) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => this.paramMap = params);
    this.singleBook = this.books.filter(book => this.paramMap.params.id == book.id);
    this.createForm();
  }
  ngOnChanges() {
    this.rebuildForm();
  }
  createForm() {
    this.bookForm = this.fb.group({
      name: this.singleBook[0].name,
      author: this.singleBook[0].author,
      number_of_pages: this.singleBook[0].number_of_pages,
      date_of_publication: this.singleBook[0].date_of_publication
    });
  }
  rebuildForm() {
    this.bookForm.reset({
      name: this.singleBook[0].name,
      author: this.singleBook[0].author,
      number_of_pages: this.singleBook[0].number_of_pages,
      date_of_publication: this.singleBook[0].date_of_publication
    });
  }
  onSubmit() {
    this.singleBook[0] = this.prepareSaveBook();
    this.bookService.updateBook(this.singleBook[0]);
    this.rebuildForm();
  }
  prepareSaveBook() {
    const formModel = this.bookForm.value;
    const saveBook = {
      name: formModel.name,
      author: formModel.author,
      number_of_pages: formModel.number_of_pages,
      date_of_publication: formModel.date_of_publication
    };
    return saveBook;
  }
  revertChanges() {
    this.rebuildForm();
  }
}
