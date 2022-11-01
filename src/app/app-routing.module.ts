import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrderDetailsComponent } from './admin/order-details/order-details.component';
import { SalesComponent } from './admin/sales/sales.component';
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
    component:OrderDetailsComponent,
    path:'order-details'
  },

  {
    component:SalesComponent,
    path:'sales'
  },

  {
    component:DashboardComponent,
    path:'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
