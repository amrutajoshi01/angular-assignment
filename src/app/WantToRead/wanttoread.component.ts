import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Book } from "../Book/book";
import { BooksState } from '../Book/book.reducer';
import { Store, select } from '@ngrx/store'
import { Observable, Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import * as BooksActions from '../Book/book.action'

@Component({
  selector: "wantToRead",
  templateUrl: "./wanttoread.component.html",
  styleUrls: ["./wanttoread.component.css"]
})
export class WantToReadComponent {
  books$: Observable<BooksState>;
  booksList: { book: Book, addedOn: Date }[];
  destroyStore$ = new Subject();

  constructor(public store: Store<BooksState>,
    private cd: ChangeDetectorRef,) {
    store.pipe(takeUntil(this.destroyStore$)).subscribe(state => {
      this.booksList = state.WantToReadBooks;
      cd.markForCheck();
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroyStore$.next();
  }
}