import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BouquetsComponent } from './admin/bouquets/bouquets.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FlowersComponent } from './admin/flowers/flowers.component';
import { InventoryComponent } from './admin/inventory/inventory.component';
import { MaterialsComponent } from './admin/materials/materials.component';
import { PurchasesComponent } from './admin/purchases/purchases.component';
import { SalesComponent } from './admin/sales/sales.component';
import { SigninComponent } from './admin/signin/signin.component';
import { WebmanagementComponent } from './admin/webmanagement/webmanagement.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    children: [
      { path: 'about', component: AboutComponent },
    ]
  },
  {
    path: 'admin',
    component: SigninComponent,
  },
  {
    path: 'admin',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'bouquets', component: BouquetsComponent },
      { path: 'flowers', component: FlowersComponent },
      { path: 'materials', component: MaterialsComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'purchases', component: PurchasesComponent },
      { path: 'webmanagement', component: WebmanagementComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
