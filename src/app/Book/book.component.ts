import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, ChangeDetectionStrategy } from "@angular/core";
import { Book } from "./book";
import { BooksState } from './book.reducer';
import { Store, select } from '@ngrx/store'
import { takeUntil } from 'rxjs/operators';
import * as BooksActions from './book.action'
import { Subject } from 'rxjs';

@Component({
  selector: "book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnChanges {
  destroyStore$ = new Subject();
  @Input() booksList: Book[];
  @Output() markRead = new EventEmitter();
  @Output() toRead = new EventEmitter();
  constructor(public store: Store<BooksState>,
    private cd: ChangeDetectorRef,) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('booksList', this.booksList);
  }


  ngOnInit() {
    this.store.dispatch(BooksActions.BeginGetBooksAction())
  }
  
  markAsRead(isbn: string) {
    this.markRead.emit(isbn);
  }

  wantToRead(isbn: string) {
    this.toRead.emit(isbn);
  }

  ngOnDestroy() {
    this.destroyStore$.next();
  }
}