import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Tour } from '../interface/tour';
import { TourService } from '../service/tour.service';

@Component({
  selector: 'app-edit',
  templateUrl: './../templates/edit.component.html',
})
export class EditComponent implements OnInit {

  id:any;
  tour!: Tour;
  TourForm!: FormGroup;
  constructor(
    private _TourService: TourService,
    private ActivatedRoute: ActivatedRoute,
    private _Router: Router,
  ) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      const id = paramMap.get('id');
      this.id=id;
      let staff = this._TourService.find(id).subscribe(Tour => {
        this.TourForm = new FormGroup({
          name: new FormControl(Tour.name),
          price: new FormControl(Tour.price),
          description: new FormControl(Tour.description)
        });
      });
    });
  }

  onSubmit(): void{
    let data = this.TourForm.value;
    let tour: Tour = {
      name: data.name,
      price: data.price,
      description: data.description,
    }
   
    
    this._TourService.update(this.id,tour).subscribe(()=>{
      alert('Cập nhật thành công');
      this._Router.navigate(['/tour']);
    }, (e) => {console.log(e);})
  }

}
