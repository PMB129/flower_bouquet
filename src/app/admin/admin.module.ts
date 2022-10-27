import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { WebmanagementComponent } from './webmanagement/webmanagement.component';
import { SalesComponent } from './sales/sales.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InventoryComponent,
    PurchasesComponent,
    WebmanagementComponent,
    SalesComponent,
    HeaderComponent,
    SigninComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
