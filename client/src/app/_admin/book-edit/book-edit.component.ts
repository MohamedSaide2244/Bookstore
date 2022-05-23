import { Book } from './../../_models/book';
import { BookService } from 'src/app/_services/book.service';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if (this.editForm.dirty) {$event.returnValue=true;}}
  id:string;
  book:Book;
  
  constructor(private router:Router, private route: ActivatedRoute,private bookService:BookService,private toastr: ToastrService) {
    this.id=this.route.snapshot.paramMap.get('id');
    if (this.id) this.bookService.get(this.id).pipe(take(1)).subscribe((b:Book) => {this.book = b});
   }

  ngOnInit(): void {
  }

  save(book: Book) {
    if (this.id) {
     this.bookService.update(this.id, book).pipe().subscribe(()=>{
       this.book=book;
       this.toastr.success('Book updated');
       this.editForm.reset(this.book);
      });
    }
    else {
      this.bookService.creat(book).pipe().subscribe(()=>{
        this.book=book;
        this.toastr.success('Book Added');
        this.editForm.reset(this.book);
       });
    }
  }

  delete(){
    if (!confirm('Are you sure you want to delete this book?')) return;
     
      this.bookService.delete(this.id).subscribe();
      this.router.navigate(['/lists']);
    
  }

}
