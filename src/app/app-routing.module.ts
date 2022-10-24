import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    component:SalesComponent,
    path:'sales'
  },

  {
    component:OrderDetailsComponent,
    path:'order-details'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
