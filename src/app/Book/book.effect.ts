import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as BooksActions from './book.action';
import { BooksService } from './book.service';


@Injectable()
export class BooksEffects {
    constructor(private action$: Actions, private booksService: BooksService) {
    }

    GetBooks$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(BooksActions.BeginGetBooksAction),
            map(() => this.booksService.getBooks()),
            map(payload => BooksActions.SuccessGetBooksAction({ payload }))
        )
    );

    MarkAsRead$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(BooksActions.BeginMarkAsReadAction),
            map((payload) => this.booksService.markAsRead(payload.payload)),
            map(payload => BooksActions.SuccessMarkAsReadAction({ payload }))
        )
    );

    WantToRead$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(BooksActions.BeginWantToReadAction),
            map((payload) => this.booksService.wantToRead(payload.payload)),
            map(payload => BooksActions.SuccessWantToReadAction({ payload }))
        )
    );

}