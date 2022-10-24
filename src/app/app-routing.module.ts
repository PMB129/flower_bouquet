import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseOrderComponent } from './choose-order/choose-order.component';
import { OrderArrangedComponent } from './order-arranged/order-arranged.component';
import { OrderCustomizePage1Component } from './order-customize-page1/order-customize-page1.component';

const routes: Routes = [
  {
    component:ChooseOrderComponent,
    path:'choose_order',
    title: 'Order'
  },
  {
    component:OrderArrangedComponent,
    path:'order_arranged',
    title:'Order || Buy Bouquet'
  },
  {
    component:OrderCustomizePage1Component,
    path:'order_customize_page1',
    title:'Order || Customize Bouquet'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
