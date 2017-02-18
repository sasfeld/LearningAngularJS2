import {Component, OnInit, OnDestroy} from '@angular/core';
import {Book} from "../shared/book";
import {BookDataService} from "../shared/book-data.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookDataService]
})
export class BookListComponent implements OnInit, OnDestroy {
  private books: Observable<Book[]>;

  constructor(private bookDataService: BookDataService) {
  }

  ngOnInit() {
    console.log("BookListComponent#ngOnInit");
    this.books = this.bookDataService.getBooks();
  }

  ngOnDestroy(): void {
    console.log("BookListComponent#ngOnDestroy");
  }

  getBooks(): Observable<Book[]> {
    return this.books;
  }

  successFn() {

  }

}
