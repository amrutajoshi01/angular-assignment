import { Action, createReducer, on } from "@ngrx/store";
import * as BooksActions from "./book.action";
import { Book } from "./book";
import booksData from "../../books.json";

export interface BooksState {
  Books: Book[];
}

const initialState: BooksState = {
    Books: booksData
};

const booksReducer = createReducer(
    initialState,
    on(BooksActions.GetBooksAction, state => ({ ...state, Books: state.Books })),
  );
  
  export function reducer(state: BooksState | undefined, action: Action) {
    return booksReducer(state, action);
  }