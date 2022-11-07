import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { ArrangedBouquetComponent } from './arranged-bouquet/arranged-bouquet.component';
import { CustomFlowerComponent } from './custom-flower/custom-flower.component';
import { CustomSleeveComponent } from './custom-sleeve/custom-sleeve.component';
import { CustomTieComponent } from './custom-tie/custom-tie.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { CustomConfirmComponent } from './custom-confirm/custom-confirm.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'order/arranged-bouquet',
    component: ArrangedBouquetComponent,
  },
  {
    path: 'order/custom-flower',
    component: CustomFlowerComponent,
  },
  {
    path: 'order/custom-sleeve',
    component: CustomSleeveComponent,
  },
  {
    path: 'order/custom-tie',
    component: CustomTieComponent,
  },
  {
    path: 'order/custom-card',
    component: CustomCardComponent,
  },
  {
    path: 'order/custom-confirm',
    component: CustomConfirmComponent,
  },
  {
    path: 'order/order-list',
    component: OrderListComponent,
  },
  {
    path: 'order/checkout',
    component: CheckoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
