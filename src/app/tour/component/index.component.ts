import { Component, OnInit } from '@angular/core';
import { Tour } from '../interface/tour';
import { TourService } from '../service/tour.service';

@Component({
  selector: 'app-index',
  templateUrl: './../templates/index.component.html',
})
export class IndexComponent implements OnInit {

  tours: Tour[] =[];
  constructor(
    private _TourService:TourService
  ) { }

  ngOnInit(): void {
    this._TourService.getAll().subscribe(res=>{
      this.tours = res
    });
  }
  deleteItem():void{

  }

}
