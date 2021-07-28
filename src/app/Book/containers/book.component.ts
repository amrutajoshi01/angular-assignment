import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Book } from "../book";
import * as fromBooks from '../book.reducer';
import { Store, select } from '@ngrx/store'
import { Observable, Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import * as BooksActions from '../book.action'

@Component({
  selector: "book-container",
  templateUrl: "./book.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookContainerComponent {
  destroyStore$ = new Subject();
  booksList: Book[];
  books$: Observable<fromBooks.BooksState>;
  BooksSubscription: Subscription;
  constructor(public store: Store<fromBooks.BooksState>,
    private cd: ChangeDetectorRef,) {
    store.pipe(takeUntil(this.destroyStore$)).subscribe(state => {
      this.booksList = state.Books;
      cd.markForCheck();
    });
    this.books$ = store.pipe(select('books'));
    this.BooksSubscription = this.books$
      .pipe(
        map(x => {
          this.booksList = x.Books;
        })
      )
      .subscribe();
  }


  ngOnInit() {
    this.store.dispatch(BooksActions.BeginGetBooksAction())
    this.cd.markForCheck();
  }

  markAsRead(isbn: string) {
    this.store.dispatch(BooksActions.BeginMarkAsReadAction({ payload: isbn }))
  }

  wantToRead(isbn: string) {
    this.store.dispatch(BooksActions.BeginWantToReadAction({ payload: isbn }))
  }

  ngOnDestroy() {
    this.destroyStore$.next();
  }
}