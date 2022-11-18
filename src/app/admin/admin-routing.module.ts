import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBouquetComponent } from './add-bouquet/add-bouquet.component';
import { AddFlowerComponent } from './add-flower/add-flower.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryBouquetComponent } from './inventory-bouquet/inventory-bouquet.component';
import { InventoryFlowersComponent } from './inventory-flowers/inventory-flowers.component';
import { EditBouquetComponent } from './edit-bouquet/edit-bouquet.component';
import { EditFlowerComponent } from './edit-flower/edit-flower.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { HistoryComponent } from './history/history.component';
import { SigninComponent } from './signin/signin.component';
import { ViewBouquetComponent } from './view-bouquet/view-bouquet.component';
import { ViewFlowerComponent } from './view-flower/view-flower.component';
import { InventorySleevesComponent } from './inventory-sleeves/inventory-sleeves.component';
import { InventoryTiesComponent } from './inventory-ties/inventory-ties.component';

const routes: Routes = [
  {
    path: 'admin',
    component: SigninComponent,

  },
  {
    path: 'admin',
    children: [
      { path: 'dashboard', component: DashboardComponent },


      { path: 'add-bouquet', component: AddBouquetComponent },
      { path: 'view-bouquet', component: ViewBouquetComponent },
      { path: 'edit-bouquet', component: EditBouquetComponent },

      { path: 'add-flower', component: AddFlowerComponent },
      { path: 'view-flower', component: ViewFlowerComponent },
      { path: 'edit-flower', component: EditFlowerComponent },


      { path: 'orders', component: OrdersComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'purchase-details', component: PurchaseDetailsComponent },
      { path: 'order-details', component: OrderDetailsComponent },

      {path: 'inventory-flowers', component:InventoryFlowersComponent},
      {path: 'inventory-bouquet', component:InventoryBouquetComponent},
      {path: 'inventory-sleeves', component:InventorySleevesComponent},
      {path: 'inventory-ties', component:InventoryTiesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
