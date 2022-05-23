import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/_models/book';
import { BookService } from 'src/app/_services/book.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  book;
  @ViewChild('editForm') editForm: NgForm;
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if (this.editForm.dirty) {$event.returnValue=true;}}
  constructor(private router: Router, private route: ActivatedRoute, private bookService: BookService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.book=[];
  }

  save(book: Book) {
    this.bookService.creat(book).pipe().subscribe(() => {
      this.book = book;
      this.toastr.success('Book Added');
      this.editForm.reset(this.book);
    });
  }
}


