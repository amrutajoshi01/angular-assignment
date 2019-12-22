import { Injectable } from '@angular/core';
import booksData from "../../books.json";
import markAsReadBooks from "../../markasread.json";
import wantToReadBooks from "../../wanttoread.json";
import { Book } from './book.js';

@Injectable()
export class BooksService {
    Books: Book[];
    MarkAsReadBooks: { book: Book, addedOn: Date }[];
    WantToReadBooks: { book: Book, addedOn: Date }[];
    constructor() {
        this.Books = booksData;
        this.MarkAsReadBooks = markAsReadBooks;
        this.WantToReadBooks = wantToReadBooks;
    }

    getBooks() {
        return this.Books;
    }

    markAsRead(isbn: string) {
        let isMarked = this.MarkAsReadBooks.find(book => book.book.isbn === isbn)
        if (!isMarked) {
            let markedBook = Object.assign({}, { book: this.Books.find(book => book.isbn === isbn), addedOn: new Date() });
            this.MarkAsReadBooks = this.MarkAsReadBooks.concat(markedBook);
        }
        let toRemove = this.WantToReadBooks.indexOf(this.WantToReadBooks.find(book => book.book.isbn === isbn));
        if(toRemove>-1)this.WantToReadBooks.splice(toRemove,1);
        return this.MarkAsReadBooks;
    }

    wantToRead(isbn: string) {
        console.log("want to read (service)" + isbn);
        let isMarked = this.WantToReadBooks.find(book => book.book.isbn === isbn)
        let isRead = this.MarkAsReadBooks.find(book => book.book.isbn === isbn)
        if (!isMarked && !isRead) {
            let markedBook = Object.assign({}, { book: this.Books.find(book => book.isbn === isbn), addedOn: new Date() });
            this.WantToReadBooks = this.WantToReadBooks.concat(markedBook);
        }
        return this.WantToReadBooks;
    }
}