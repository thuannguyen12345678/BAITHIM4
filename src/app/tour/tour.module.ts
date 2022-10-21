import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './component/index.component';
import { TourRoutingModule } from './tour-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './component/add.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './component/edit.component';
import { DeleteComponent } from './component/delete.component';
import { ShowComponent } from './component/show.component';

@NgModule({
  declarations: [
    IndexComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,TourRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ]
})
export class TourModule { }
