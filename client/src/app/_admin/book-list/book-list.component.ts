import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/_models/book';
import { BookService } from 'src/app/_services/book.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  books: Book[] = [];
  displayedColumns: string[] = ['bookName', 'price', 'author', 'id'];
  dataSource;
  constructor(private bookService: BookService) {
    
  }

  ngOnInit(): void  {
    this.getAll();
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAll() {
    return this.bookService.getAll().subscribe((response: Book[]) => {
      this.books = response;
      console.log(this.books)
      this.dataSource = new MatTableDataSource(this.books);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }
}
