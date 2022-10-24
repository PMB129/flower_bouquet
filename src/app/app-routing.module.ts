import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChooseOrderComponent } from './choose-order/choose-order.component';
import { OrderArrangedComponent } from './order-arranged/order-arranged.component';

const routes: Routes = [
  {
    component:ChooseOrderComponent,
    path:'choose_order',
    title: 'Order'
  },
  {
    component:OrderArrangedComponent,
    path:'order_arranged',
    title:'Order || Buy'
  },
  {
    component:CheckoutComponent,
    path:'checkout',
    title:'Checkout'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
