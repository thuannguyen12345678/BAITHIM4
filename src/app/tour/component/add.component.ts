import { Component, OnInit } from '@angular/core';
import { Tour } from '../interface/tour';
import { TourService } from '../service/tour.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './../templates/add.component.html',
})
export class AddComponent implements OnInit {
  tourForm!: FormGroup;
  constructor(
    private _TourService:TourService,
    private _Router:Router,
  ) { }

  ngOnInit(): void {
    this.tourForm = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl('')
    });
  }

  onSubmit(): void {
    let data = this.tourForm.value;
    let Tour: Tour = {
      name: data.name,
      price: data.price,
      description: data.description
    };
    this._TourService.store(Tour).subscribe(()=>{
      alert('thêm sản phẩm thành công');
      this._Router.navigate(['/tour']);
    },(e) => {
      console.log(e);
    });
  }

}
