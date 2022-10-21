import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../interface/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-add',
  templateUrl: './../templates/add.component.html',
})
export class AddComponent implements OnInit {
  bookForm!: FormGroup;
  constructor(private _bookService: BookService, private _Router: Router) {}

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
    });
  }

  onSubmit(): void {
    let data = this.bookForm.value;
    let Book: Book = {
      name: data.name,
      price: data.price,
    };
    this._bookService.store(Book).subscribe(
      () => {
        alert('thêm sản phẩm thành công');
        // this.bookForm.reset();
        this._Router.navigate(['/book']);
      },
      (e) => {
        console.log(e);
      }
    );
  }
}
