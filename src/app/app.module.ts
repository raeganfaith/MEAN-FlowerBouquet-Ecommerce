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
import { OrderListComponent } from './order-list/order-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GalleryComponent } from './gallery/gallery.component';
// Import for JSON
import {HttpClientModule} from '@angular/common/http';
import { ModalsComponent } from './modals/modals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    OrderListComponent,
    CheckoutComponent,
    GalleryComponent,
    ModalsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
