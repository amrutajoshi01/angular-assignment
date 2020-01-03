import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Book } from "app/Book/book";

@Component({
  selector: "add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"]
})
export class AddBookComponent implements OnInit {
  @Output() add = new EventEmitter<Book>();
  newBook = new Book();

  constructor() {
    
  }

  addBook() {
    this.add.emit(this.newBook);
  }

  ngOnInit() {}
}
