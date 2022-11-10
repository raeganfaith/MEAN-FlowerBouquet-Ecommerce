import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBouquetComponent } from './add-bouquet/add-bouquet.component';
import { AddFlowerComponent } from './add-flower/add-flower.component';
import { AddMaterialComponent } from './add-material/add-material.component';
import { BouquetsComponent } from './bouquets/bouquets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBouquetComponent } from './edit-bouquet/edit-bouquet.component';
import { EditFlowerComponent } from './edit-flower/edit-flower.component';
import { EditMaterialComponent } from './edit-material/edit-material.component';
import { FlowersComponent } from './flowers/flowers.component';
import { MaterialsComponent } from './materials/materials.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { SigninComponent } from './signin/signin.component';
import { ViewBouquetComponent } from './view-bouquet/view-bouquet.component';
import { ViewFlowerComponent } from './view-flower/view-flower.component';
import { ViewMaterialComponent } from './view-material/view-material.component';

const routes: Routes = [
  {
    path: 'admin',
    component: SigninComponent,

  },
  {
    path: 'admin',
    children: [
      { path: 'dashboard', component: DashboardComponent },

      { path: 'bouquets', component: BouquetsComponent },
      { path: 'add-bouquet', component: AddBouquetComponent },
      { path: 'view-bouquet', component: ViewBouquetComponent },
      { path: 'edit-bouquet', component: EditBouquetComponent },

      { path: 'flowers', component: FlowersComponent },
      { path: 'add-flower', component: AddFlowerComponent },
      { path: 'view-flower', component: ViewFlowerComponent },
      { path: 'edit-flower', component: EditFlowerComponent },

      { path: 'materials', component: MaterialsComponent },
      { path: 'add-material', component: AddMaterialComponent },
      { path: 'view-material', component: ViewMaterialComponent },
      { path: 'edit-material', component: EditMaterialComponent },

      { path: 'orders', component: OrdersComponent },
      { path: 'purchases', component: PurchasesComponent },
      { path: 'purchase-details', component: PurchaseDetailsComponent },
      { path: 'order-details', component: OrderDetailsComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
