import { createAction, props } from "@ngrx/store";
import { Book } from "./book";

export const GetBooksAction = createAction("GetBooks");

export const BeginGetBooksAction = createAction("BeginGetBooks");

export const SuccessGetBooksAction = createAction(
  "SuccessGetBooks",
  props<{ payload: Book[] }>()
);
