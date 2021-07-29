import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent } from './book-list/book-list.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookSortComponent} from './book-sort/book-sort.component';


const routes: Routes = [
      {
        path:'',
        redirectTo:'books',
        pathMatch:'full'  
      },
      {
        path:'books',
        component:BookListComponent
      },
      {
        path:'book-details',
        component:BookDetailsComponent
      },
      {
        path:'books/:id',
        component:BookDetailsComponent
      },
      {
        path:'books/sort/:sort_by',
        component:BookSortComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
