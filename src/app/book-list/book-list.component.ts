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
  private books: Book[];
  private bookdataSubscription: Subscription;

  constructor(private bookDataService: BookDataService) {
  }

  ngOnInit() {
    console.log("BookListComponent#ngOnInit");
    this.bookdataSubscription = this.bookDataService.getBooks()
      .subscribe((books) => {
        this.books = books;
      });
  }

  ngOnDestroy(): void {
    console.log("BookListComponent#ngOnDestroy");
    this.bookdataSubscription.unsubscribe();
  }

  getBooks(): Book[] {
    return this.books;
  }

  successFn() {

  }

}
