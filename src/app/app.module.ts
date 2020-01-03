import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './Book/book.component';
import { MenuComponent } from './Menu/menu.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './Book/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { BooksEffects } from './Book/book.effect';
import { BooksService } from './Book/book.service';
import { WantToReadComponent } from './WantToRead/wanttoread.component';
import { MarkAsReadComponent } from './MarkAsRead/markasread.component';
import { BookOperationsComponent } from './BookOperations/book-operations.component';
import { EditComponent } from './Edit/edit.component';
import { AddBookComponent } from './AddBook/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MenuComponent,
    WantToReadComponent,
    MarkAsReadComponent,
    BookOperationsComponent,
    EditComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ books: reducer}),
    EffectsModule.forRoot([BooksEffects]),
    FormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
