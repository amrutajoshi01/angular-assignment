import { Component, OnInit } from "@angular/core";
import { Book } from "./book";
import { BooksState } from './book.reducer';
import { Store, select } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as BooksActions from './book.action'

@Component({
  selector: "book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent {

  constructor(public store: Store<BooksState>) {
    this.books$ = store.pipe(select('books'));
  }

  books$: Observable<BooksState>;
  BooksSubscription: Subscription;
  booksList: Book[];

  ngOnInit() {
    this.BooksSubscription = this.books$
      .pipe(
        map(x => {
          this.booksList = x.Books;
        })
      )
      .subscribe();
    this.store.dispatch(BooksActions.BeginGetBooksAction())
  }

  markAsRead(isbn: string) {
    this.store.dispatch(BooksActions.BeginMarkAsReadAction({ payload: isbn }))
  }

  wantToRead(isbn: string) {
    this.store.dispatch(BooksActions.BeginWantToReadAction({ payload: isbn }))
  }
}