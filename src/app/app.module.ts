import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './Book/book.component';
import { MenuComponent } from './Menu/menu.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './Book/book.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ books: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
