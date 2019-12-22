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
