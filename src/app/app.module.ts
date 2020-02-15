import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouteRoutingModule } from './route/route-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
