import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BouquetsComponent } from './bouquets/bouquets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlowersComponent } from './flowers/flowers.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MaterialsComponent } from './materials/materials.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { SalesComponent } from './sales/sales.component';
import { SigninComponent } from './signin/signin.component';
import { WebmanagementComponent } from './webmanagement/webmanagement.component';

const routes: Routes = [
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
