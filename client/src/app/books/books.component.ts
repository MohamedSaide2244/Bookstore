import { Book } from './../_models/book';
import { BookService } from './../_services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:Book[]=[];
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    return this.bookService.getAll().subscribe((response:Book[])=>{
      this.books=response;
      console.log(this.books)
    })
  }
}
