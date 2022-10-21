import { Component, OnInit } from '@angular/core';
import { Book } from '../interface/book';
import { BookService } from '../service/book.service';
@Component({
  selector: 'app-index',
  templateUrl: './../templates/index.component.html',
})
export class IndexComponent implements OnInit {

  books: Book[] = [];
  constructor(
    private _bookService: BookService,
  ) { }

  ngOnInit(): void {
    this._bookService.getAll().subscribe(res=>{
      this.books = res
    });
  }
  deleteItem():void{

  }

}
