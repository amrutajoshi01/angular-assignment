# AngularAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

### Installation
Navigate to the project directory and run `npm install`.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Features
1. There are 3 Items in the Navigation menu. "All Books", "Read" and "Want to Read".
2. "All Books" displays list of all books from books.json file.
   * Clicking "Want To Read" adds the book to "WantToReadBooks" array in reducer.
   * Clicking "Mark as Read" adds the book to "ReadBooks" array in reducer and removes the book from "WantToReadBooks", if present.
3. "Want To Read" displays list of all books from "WantToReadBooks" array in reducer.
4. "Read" displays list of all books from "ReadBooks" array in reducer.
