import { ChangeDetectorRef, Component, OnInit, Output } from "@angular/core";
import { Book } from "../Book/book";
import { BooksState } from "../Book/book.reducer";
import { Store, select } from "@ngrx/store";
import { Observable, Subject, Subscription } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import * as BooksActions from "../Book/book.action";
@Component({
  selector: "book-operations",
  templateUrl: "./book-operations.component.html",
  styleUrls: ["./book-operations.component.css"]
})
export class BookOperationsComponent implements OnInit {
  @Output() editBook: Book;
  destroyStore$ = new Subject();
  constructor(public store: Store<BooksState>,
    private cd: ChangeDetectorRef,) {
    store.pipe(takeUntil(this.destroyStore$)).subscribe(state => {
      this.booksList = state.Books;
      cd.markForCheck();
    });
  }

  books$: Observable<BooksState>;
  BooksSubscription: Subscription;
  booksList: Book[];
  loadEdit = false;
  loadAdd = false;

  ngOnInit() {
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
    this.destroyStore$.next();
  }
}
