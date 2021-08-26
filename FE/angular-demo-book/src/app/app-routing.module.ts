import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./component/list-product/list-product.component";
import {EditBookComponent} from "./component/edit-book/edit-book.component";

const routes: Routes = [
  {
    path:'',
    component : ListProductComponent
  },

  {
    path:'edit-book/:id',
    component:EditBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
