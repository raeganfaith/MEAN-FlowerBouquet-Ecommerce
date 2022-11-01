import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { WebmanagementComponent } from './webmanagement/webmanagement.component';
import { SalesComponent } from './sales/sales.component';
import { SigninComponent } from './signin/signin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BouquetsComponent } from './bouquets/bouquets.component';
import { FlowersComponent } from './flowers/flowers.component';
import { MaterialsComponent } from './materials/materials.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InventoryComponent,
    PurchasesComponent,
    WebmanagementComponent,
    SalesComponent,
    SigninComponent,
    SidebarComponent,
    NavbarComponent,
    BouquetsComponent,
    FlowersComponent,
    MaterialsComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
