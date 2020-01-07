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
  @Output() editBook: Book;

  constructor(public store: Store<BooksState>) {
    this.books$ = store.pipe(select("books"));
  }

  books$: Observable<BooksState>;
  BooksSubscription: Subscription;
  booksList: Book[];
  loadEdit = false;
  loadAdd = false;

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

  addBook(book:Book) {
    this.store.dispatch(BooksActions.BeginAddBookAction({payload: book}));
    this.loadAdd = false;
  }

  openEdit(book: Book) {
    this.store.dispatch(BooksActions.BeginEditBookAction({payload: book}));
    this.loadEdit = true;
  }

  closeEdit(book: Book) {
    this.store.dispatch(BooksActions.BeginEditBookAction({payload: book}));
    this.loadEdit = false;
  }

  openAdd(book: Book) {
    this.loadAdd = true;
  }

  deleteBook(isbn: string) {
    this.store.dispatch(BooksActions.BeginDeleteBookAction({payload: isbn}));
  }

  ngOnDestroy() {
    this.BooksSubscription.unsubscribe();
  }
}
