import { createAction, props } from "@ngrx/store";
import { Book } from "./book";

export const BeginGetBooksAction = createAction("BeginGetBooks");

export const SuccessGetBooksAction = createAction("SuccessGetBooks", props<{ payload: Book[] }>());

export const BeginMarkAsReadAction = createAction("BeginMarkAsRead", props<{ payload: string }>());

export const SuccessMarkAsReadAction = createAction("SuccessMarkAsRead",
  props<{ payload: { book: Book, addedOn: Date }[] }>());

export const BeginWantToReadAction = createAction("BeginWantToRead", props<{ payload: string }>());

export const SuccessWantToReadAction = createAction("SuccessWantToRead",
  props<{ payload: { book: Book, addedOn: Date }[] }>());

export const BeginAddBookAction = createAction("BeginAddBook", props<{ payload: Book }>());

export const SuccessAddBookAction = createAction("SuccessAddBook", props<{ payload: Book[] }>());

export const BeginEditBookAction = createAction("BeginEditBook", props<{ payload: Book }>());

export const SuccessEditBookAction = createAction("SuccessEditBook", props<{ payload: Book[] }>());

export const BeginDeleteBookAction = createAction("BeginDeleteBook", props<{ payload: string }>());

export const SuccessDeleteBookAction = createAction("SuccessDeleteBook", props<{ payload: Book[] }>());