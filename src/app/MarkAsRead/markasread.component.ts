import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Book } from "../Book/book";
import { BooksState } from '../Book/book.reducer';
import { Store, select } from '@ngrx/store'
import { Observable, Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import * as BooksActions from '../Book/book.action'

@Component({
  selector: "markAsRead",
  templateUrl: "./markasread.component.html",
  styleUrls: ["./markasread.component.css"]
})
export class MarkAsReadComponent {
  booksList: { book: Book, addedOn: Date }[];
  destroyStore$ = new Subject();

  constructor(public store: Store<BooksState>,
    private cd: ChangeDetectorRef,) {
    store.pipe(takeUntil(this.destroyStore$)).subscribe(state => {
      this.booksList = state.ReadBooks;
      cd.markForCheck();
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroyStore$.next();
  }
}