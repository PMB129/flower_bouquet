import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { InventoryComponent } from './admin/inventory/inventory.component';
import { PurchasesComponent } from './admin/purchases/purchases.component';
import { WebmanagementComponent } from './admin/webmanagement/webmanagement.component';
import { SalesComponent } from './admin/sales/sales.component';
import { SigninComponent } from './admin/signin/signin.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { BouquetsComponent } from './admin/bouquets/bouquets.component';
import { FlowersComponent } from './admin/flowers/flowers.component';
import { MaterialsComponent } from './admin/materials/materials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    // DashboardComponent,
    // InventoryComponent,
    // PurchasesComponent,
    // WebmanagementComponent,
    // SalesComponent,
    // SigninComponent,
    // SidebarComponent,
    // NavbarComponent,
    // BouquetsComponent,
    // FlowersComponent,
    // MaterialsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
