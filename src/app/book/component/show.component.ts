import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from '../interface/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-show',
  templateUrl: './../templates/show.component.html',
})
export class ShowComponent implements OnInit {
  id: any = 0;
  book!: Book;
  constructor(
    private _bookService: BookService,
    private ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._bookService.find(id).subscribe((Book) => {
        this.book = Book;
      });
    });
  }
}
