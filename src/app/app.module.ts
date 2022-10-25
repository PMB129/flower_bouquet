import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { OrderComponent } from './order/order.component';
import { CustomFlowerComponent } from './custom-flower/custom-flower.component';
import { ArrangedBouquetComponent } from './arranged-bouquet/arranged-bouquet.component';
import { CustomSleeveComponent } from './custom-sleeve/custom-sleeve.component';
import { CustomTieComponent } from './custom-tie/custom-tie.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { CustomConfirmComponent } from './custom-confirm/custom-confirm.component';
import { ContactComponent } from './contact/contact.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutPageComponent,
    OrderComponent,
    CustomFlowerComponent,
    ArrangedBouquetComponent,
    CustomSleeveComponent,
    CustomTieComponent,
    CustomCardComponent,
    CustomConfirmComponent,
    ContactComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
