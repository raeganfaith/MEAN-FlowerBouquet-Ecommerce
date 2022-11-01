import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { WebmanagementComponent } from './webmanagement/webmanagement.component';
import { SalesComponent } from './sales/sales.component';
import { SigninComponent } from './signin/signin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BouquetsComponent } from './bouquets/bouquets.component';
import { FlowersComponent } from './flowers/flowers.component';
import { MaterialsComponent } from './materials/materials.component';
import { AddBouquetComponent } from './add-bouquet/add-bouquet.component';
import { EditBouquetComponent } from './edit-bouquet/edit-bouquet.component';
import { ViewBouquetComponent } from './view-bouquet/view-bouquet.component';
import { ViewFlowerComponent } from './view-flower/view-flower.component';
import { AddFlowerComponent } from './add-flower/add-flower.component';
import { EditFlowerComponent } from './edit-flower/edit-flower.component';
import { EditMaterialComponent } from './edit-material/edit-material.component';
import { AddMaterialComponent } from './add-material/add-material.component';
import { ViewMaterialComponent } from './view-material/view-material.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PurchasesComponent,
    WebmanagementComponent,
    SalesComponent,
    SigninComponent,
    SidebarComponent,
    NavbarComponent,

    BouquetsComponent,
    AddBouquetComponent,
    EditBouquetComponent,
    ViewBouquetComponent,

    FlowersComponent,
    ViewFlowerComponent,
    AddFlowerComponent,
    EditFlowerComponent,

    MaterialsComponent,
    EditMaterialComponent,
    AddMaterialComponent,
    ViewMaterialComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
