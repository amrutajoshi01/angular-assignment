import { Component, OnInit } from "@angular/core";
import { Book } from "./book";
import booksData from "../../books.json";

@Component({
  selector: "book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent {
  booksList: Book[];
  constructor() {
    this.booksList = booksData;
  }
}
