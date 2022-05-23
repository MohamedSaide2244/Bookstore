import { BookNewComponent } from './_admin/book-new/book-new.component';
import { BookEditComponent } from './_admin/book-edit/book-edit.component';
import { BookListComponent } from './_admin/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdminGuard } from './_guards/admin.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'',
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:[
      {path:'books',component:BooksComponent},
      // {path:'members/:username',component:MemberDetailComponent},
       {path:'admin/book/:id',component:BookEditComponent,canActivate: [AdminGuard]},
       {path:'admin/books/new',component:BookNewComponent,canActivate: [AdminGuard]},
       {path:'lists',component:BookListComponent,canActivate: [AdminGuard]},
      // {path:'messages',component:MessagesComponent},
    ]
  },
  {path:'**',component:HomeComponent,pathMatch:'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
