import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookComponent } from "./Book/book.component";
import { MarkAsReadComponent } from "./MarkAsRead/markasread.component";
import { WantToReadComponent } from "./WantToRead/wanttoread.component";
import { BookOperationsComponent } from './BookOperations/book-operations.component';

const routes: Routes = [
  { path: "books", component: BookComponent },
  { path: "read", component: MarkAsReadComponent },
  { path: "toread", component: WantToReadComponent },
  { path: "edit", component: BookOperationsComponent },
  { path: "", redirectTo: "/books", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
