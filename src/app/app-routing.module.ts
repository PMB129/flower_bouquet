import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseOrderComponent } from './choose-order/choose-order.component';

const routes: Routes = [
  {
    component:ChooseOrderComponent,
    path:'choose_order',
    title: 'Order'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
