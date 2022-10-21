import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add.component';
import { DeleteComponent } from './component/delete.component';
import { EditComponent } from './component/edit.component';
import { IndexComponent } from './component/index.component';
import { ShowComponent } from './component/show.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'add', component: AddComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'delete/:id', component: DeleteComponent},
  { path: 'show/:id', component: ShowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }