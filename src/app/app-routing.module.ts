import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { ArrangedBouquetComponent } from './arranged-bouquet/arranged-bouquet.component';
import { CustomFlowerComponent } from './custom-flower/custom-flower.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GalleryComponent } from './gallery/gallery.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};


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
    path: 'gallery',
    component: GalleryComponent,
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
    path: 'order/order-list',
    component: OrderListComponent,
  },
  {
    path: 'order/checkout',
    component: CheckoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
