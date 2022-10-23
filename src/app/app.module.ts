import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { ChooseOrderComponent } from './choose-order/choose-order.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerNavbarComponent,
    ChooseOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
