import { Action, createReducer, on } from "@ngrx/store";
import * as BooksActions from "./book.action";
import { Book } from "./book";

export interface BooksState {
  Books: Book[];
  ReadBooks: { book: Book; addedOn: Date }[];
  WantToReadBooks: { book: Book; addedOn: Date }[];
  editBook: Book;
}

const initialState: BooksState = {
  Books: [],
  ReadBooks: [],
  WantToReadBooks: [],
  editBook: new Book()
};

const booksReducer = createReducer(
  initialState,
  on(BooksActions.BeginGetBooksAction, state => state),
  on(BooksActions.SuccessGetBooksAction, (state: any, { payload }) => {
    return { ...state, Books: payload };
  }),

  on(BooksActions.BeginMarkAsReadAction, (state: any, { payload }) => {
    return { ...state, Books: payload };
  }),
  on(BooksActions.SuccessMarkAsReadAction, (state: any, { payload }) => {
    return { ...state, ReadBooks: payload, Books: state.Books };
  }),

  on(BooksActions.BeginWantToReadAction, (state: any, { payload }) => {
    return { ...state, Books: payload };
  }),
  on(BooksActions.SuccessWantToReadAction, (state: any, { payload }) => {
    return { ...state, WantToReadBooks: payload, Books: state.Books };
  }),

  on(BooksActions.BeginAddBookAction, (state: any) => {
    return state;
  }),
  on(BooksActions.SuccessAddBookAction, (state: any, { payload }) => {
    return { ...state, Books: payload };
  }),

  on(BooksActions.BeginEditBookAction, (state: any, { payload }) => {
    return { ...state, editBook: payload };
  }),
  on(BooksActions.SuccessEditBookAction, (state: any, { payload }) => {
    return { ...state, Books: payload };
  }),

  on(BooksActions.BeginDeleteBookAction, (state: any, { payload }) => {
    return { ...state, editBook: payload };
  }),
  on(BooksActions.SuccessDeleteBookAction, (state: any, { payload }) => {
    return { ...state, Books: payload };
  })
);

export function reducer(state: BooksState | undefined, action: Action) {
  return booksReducer(state, action);
}
