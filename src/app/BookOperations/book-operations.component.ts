import { Component, OnInit, Output } from "@angular/core";
import { Book } from "../Book/book";
import { BooksState } from "../Book/book.reducer";
import { Store, select } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import * as BooksActions from "../Book/book.action";
@Component({
  selector: "book-operations",
  templateUrl: "./book-operations.component.html",
  styleUrls: ["./book-operations.component.css"]
})
export class BookOperationsComponent implements OnInit {
  constructor(public store: Store<BooksState>) {
    this.books$ = store.pipe(select("books"));
  }

  books$: Observable<BooksState>;
  BooksSubscription: Subscription;
  booksList: Book[];
  loaded = false;
  @Output() editbook: Book;
  ngOnInit() {
    this.BooksSubscription = this.books$
      .pipe(
        map(x => {
          this.booksList = x.Books;
        })
      )
      .subscribe();
    this.store.dispatch(BooksActions.BeginGetBooksAction());
  }

  addBook($event) {
    this.store.dispatch(BooksActions.BeginAddBookAction($event));
  }

  openEdit(book: Book) {
    this.editbook = book;
    this.loaded = true;
  }

  closeEdit() {
    this.loaded = false;
  }
  ngOnDestroy() {
    this.BooksSubscription.unsubscribe();
  }
}
