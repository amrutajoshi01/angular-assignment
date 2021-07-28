import { Component, OnInit, EventEmitter, Input, Output, ChangeDetectorRef } from "@angular/core";
import { Book } from "../Book/book";
import { Observable, Subject, Subscription } from "rxjs";
import { BooksState } from "app/Book/book.reducer";
import { map, takeUntil } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
@Component({
  selector: "edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  @Input() editBook: Book;
  @Output() close = new EventEmitter();
  destroyStore$ = new Subject();
  constructor(public store: Store<BooksState>,
    private cd: ChangeDetectorRef,) {
    store.pipe(takeUntil(this.destroyStore$)).subscribe(state => {
      this.editBook = state.editBook;
      cd.markForCheck();
    });
  }

  closeEdit() {
    this.close.emit(this.editBook);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroyStore$.next();
  }
}
