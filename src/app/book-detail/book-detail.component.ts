import { Component, OnInit } from '@angular/core';
import {Book} from "../shared/book";
import {ActivatedRoute} from "@angular/router";
import {BookDataService} from "../shared/book-data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [BookDataService]
})
export class BookDetailComponent implements OnInit {
  private book:Book;
  private isbn:string;
  private bookdataSubscription: Subscription;

  constructor(private route: ActivatedRoute, private bookDataService: BookDataService) { }

  ngOnInit() {
    this.route
      .params
      .subscribe((params: {isbn: string}) => {
        console.log("ISBN: " + params.isbn);
        this.isbn = params.isbn;

        this.searchBookWithIsbnAndBind(params.isbn);
      });
  }

  private searchBookWithIsbnAndBind(isbn:string) {
    this.bookdataSubscription = this.bookDataService.getBook(isbn)
      .subscribe((book) => {
        console.log("searchBookWithIsbnAndBind(): " + book);
        this.book = book;
      });
  }

}
