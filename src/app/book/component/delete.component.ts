import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from '../interface/book';
import { BookService } from '../service/book.service'; 

@Component({
  selector: 'app-delete',
  templateUrl: './../templates/delete.component.html',
})
export class DeleteComponent implements OnInit {
  id:any;
  book!: Book;
  constructor(
    private _bookService: BookService,
    private ActivateRoute: ActivatedRoute,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    this.ActivateRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      const id = paramMap.get('id');
      this.id = id;
      this._bookService.find(id).subscribe((Book)=>{
        this.book = Book;
      });
    });

  }
  delete(): void {
    this._bookService.destroy(this.id).subscribe(()=>{
      this._Router.navigate(['/book']);
      alert('xóa thành công');
    },(e) =>{ console.log(e);})
  }

}
