import { OrderListComponent } from './order-list/order-list.component';
import { ContactComponent } from './contact/contact.component';
import { CustomConfirmComponent } from './custom-confirm/custom-confirm.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { CustomTieComponent } from './custom-tie/custom-tie.component';
import { CustomSleeveComponent } from './custom-sleeve/custom-sleeve.component';
import { ArrangedBouquetComponent } from './arranged-bouquet/arranged-bouquet.component';
import { CustomFlowerComponent } from './custom-flower/custom-flower.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    children: [
      { component: AboutPageComponent,
        path: 'about-page',  
      },
      {
        component:OrderComponent,
        path:'order',
      },
      {
        component:CustomFlowerComponent,
        path:'custom-flower',
      },
      {
        component:ArrangedBouquetComponent,
        path:'arranged-bouquet',
      },
      {
        component:CustomSleeveComponent,
        path:'custom-sleeve',
      },
      {
        component:CustomTieComponent,
        path:'custom-tie',
      },
      {
        component:CustomCardComponent,
        path:'custom-card',
      },
      {
        component:CustomConfirmComponent,
        path:'custom-confirm',
      },
      {
        component:ContactComponent,
        path:'contact',
      },
      {
        component:OrderListComponent,
        path:'order-list',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
