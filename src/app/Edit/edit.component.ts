import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../Book/book";
import { Observable, Subscription } from "rxjs";
import { BooksState } from "app/Book/book.reducer";
import { map } from "rxjs/operators";
import { select, Store } from "@ngrx/store";
@Component({
  selector: "edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  @Input() editBook: Book;
  @Output() close = new EventEmitter();
  books$: Observable<BooksState>;
  BooksSubscription: Subscription;

  constructor(public store: Store<BooksState>) {
    this.books$ = store.pipe(select("books"));
  }

  closeEdit() {
    this.close.emit(this.editBook);
  }

  ngOnInit() {
    this.BooksSubscription = this.books$
      .pipe(
        map(x => {
          this.editBook = x.editBook;
        })
      )
      .subscribe();
  }
}
