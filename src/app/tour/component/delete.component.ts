import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Tour } from '../interface/tour';
import { TourService } from '../service/tour.service';
@Component({
  selector: 'app-delete',
  templateUrl: './../templates/delete.component.html',
})
export class DeleteComponent implements OnInit {

  id:any;
  tour!: Tour;
  constructor(
    private _TourService: TourService,
    private ActivateRoute: ActivatedRoute,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    this.ActivateRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      const id = paramMap.get('id');
      this.id = id;
      this._TourService.find(id).subscribe((Tour)=>{
        this.tour = Tour;
      });
    });

  }
  delete(): void {
    this._TourService.destroy(this.id).subscribe(()=>{
      this._Router.navigate(['/tour']);
      alert('xóa thành công');
    },(e) =>{ console.log(e);})
  }

}
