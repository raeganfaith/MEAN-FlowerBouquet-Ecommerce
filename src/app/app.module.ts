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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    OrderComponent,
    ArrangedBouquetComponent
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
