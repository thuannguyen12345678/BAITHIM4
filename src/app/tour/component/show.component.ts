import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Tour } from '../interface/tour';
import { TourService } from '../service/tour.service';

@Component({
  selector: 'app-show',
  templateUrl: './../templates/show.component.html',
})
export class ShowComponent implements OnInit {
  id: any = 0;
  tour!: Tour;
  constructor(
    private _TourService: TourService,
    private ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._TourService.find(id).subscribe((Tour) => {
        this.tour = Tour;
      });
    });
  }

}
