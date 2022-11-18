import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { SigninComponent } from './signin/signin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddBouquetComponent } from './add-bouquet/add-bouquet.component';
import { EditBouquetComponent } from './edit-bouquet/edit-bouquet.component';
import { ViewBouquetComponent } from './view-bouquet/view-bouquet.component';
import { ViewFlowerComponent } from './view-flower/view-flower.component';
import { AddFlowerComponent } from './add-flower/add-flower.component';
import { EditFlowerComponent } from './edit-flower/edit-flower.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { HttpClientModule } from '@angular/common/http';
import { InventoryBouquetComponent } from './inventory-bouquet/inventory-bouquet.component';
import { InventoryFlowersComponent } from './inventory-flowers/inventory-flowers.component';
import { InventorySleevesComponent } from './inventory-sleeves/inventory-sleeves.component';
import { InventoryTiesComponent } from './inventory-ties/inventory-ties.component';
@NgModule({
  declarations: [
    DashboardComponent,
    HistoryComponent,
    OrdersComponent,
    SigninComponent,
    SidebarComponent,
    NavbarComponent,

    AddBouquetComponent,
    EditBouquetComponent,
    ViewBouquetComponent,

    ViewFlowerComponent,
    AddFlowerComponent,
    EditFlowerComponent,

    // PagesComponent,
    OrderDetailsComponent,
    PurchaseDetailsComponent,
    InventoryBouquetComponent,
    InventoryFlowersComponent,
    InventorySleevesComponent,
    InventoryTiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
