import { Book } from './../_models/book';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = environment.apiUrl;
  books:Book;
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl +'books')
  }

  get(id:string){
    return this.http.get(this.baseUrl +'books/'+id)
  }

  creat(book:Book){
    return this.http.post(this.baseUrl + 'books/', book);
  }

  update(id:string,book: Book) {
    return this.http.put(this.baseUrl + 'books/'+id, book);
  }

  delete(id:string){
    return this.http.delete(this.baseUrl + 'books/'+id);
  }
}
