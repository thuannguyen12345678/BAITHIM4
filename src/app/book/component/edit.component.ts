import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from '../interface/book';
import { BookService } from '../service/book.service';
import { FormControl, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-edit',
  templateUrl: './../templates/edit.component.html',
})
export class EditComponent implements OnInit {
  id:any;
  book!: Book;
  BookForm!: FormGroup;
  constructor(
    private _bookService: BookService,
    private ActivatedRoute: ActivatedRoute,
    private _Router: Router,
  ) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      const id = paramMap.get('id');
      this.id=id;
      let staff = this._bookService.find(id).subscribe(Book => {
        this.BookForm = new FormGroup({
          name: new FormControl(Book.name),
          price: new FormControl(Book.price)
        });
      });
    });
  }

  onSubmit(): void{
    let data = this.BookForm.value;
    let book: Book = {
      name: data.name,
      price: data.price,
    }
   
    
    this._bookService.update(this.id,book).subscribe(()=>{
      alert('Cập nhật thành công');
      this._Router.navigate(['/book']);
    }, (e) => {console.log(e);})
  }
}
