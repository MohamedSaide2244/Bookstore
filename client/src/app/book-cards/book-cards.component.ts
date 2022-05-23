import { Book } from './../_models/book';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.css']
})
export class BookCardsComponent implements OnInit {
@Input('book')book:Book;
@Input('show-action') showActions=true;
  constructor() { }

  ngOnInit(): void {
  }
  addToCart(boo:Book){
  //  this.cartService.addToCart(product)
    
  }
}
