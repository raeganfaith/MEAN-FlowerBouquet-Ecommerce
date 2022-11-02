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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
    path:'arranged-bouquet',
    component: ArrangedBouquetComponent,
  },
  {
    path:'custom-flower',
    component: CustomFlowerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
