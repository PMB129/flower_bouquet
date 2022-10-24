import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { ChooseOrderComponent } from './choose-order/choose-order.component';
import { OrderArrangedComponent } from './order-arranged/order-arranged.component';
import { OrderCustomizePage1Component } from './order-customize-page1/order-customize-page1.component';
import { OrderCustomizeFlowersComponent } from './order-customize-flowers/order-customize-flowers.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerNavbarComponent,
    ChooseOrderComponent,
    OrderArrangedComponent,
    OrderCustomizePage1Component,
    OrderCustomizeFlowersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
