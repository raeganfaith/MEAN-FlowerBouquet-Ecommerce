import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    OrderComponent,
    ArrangedBouquetComponent,
    CustomFlowerComponent,
    CustomSleeveComponent,
    CustomTieComponent,
    CustomCardComponent,
    CustomConfirmComponent,
    OrderListComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
