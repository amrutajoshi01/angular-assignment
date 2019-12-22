import { Component, OnInit } from "@angular/core";
import { Book } from "../Book/book";
import { BooksState } from '../Book/book.reducer';
import { Store, select } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as BooksActions from '../Book/book.action'

@Component({
  selector: "markAsRead",
  templateUrl: "./markasread.component.html",
  styleUrls: ["./markasread.component.css"]
})
export class MarkAsReadComponent {

  constructor(public store: Store<BooksState>) {
    this.books$ = store.pipe(select('books'));
  }

  books$: Observable<BooksState>;
  BooksSubscription: Subscription;
  booksList: { book: Book, addedOn: Date }[];

  ngOnInit() {
    this.BooksSubscription = this.books$
      .pipe(
        map(x => {
          this.booksList = x.ReadBooks;
        })
      )
      .subscribe();
  }
}