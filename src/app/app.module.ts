import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Para usar forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './usuario/sign-up/sign-up.component';
import { LoginComponent } from './usuario/login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BusquedaCriteriaComponent } from './busqueda/busqueda-criteria/busqueda-criteria.component';
import { BusquedaResultComponent } from './busqueda/busqueda-result/busqueda-result.component';
import { BusquedaService } from './busqueda/busqueda.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports de Material Angular
import {MatToolbarModule} from '@angular/material/toolbar'; //Header
import {MatGridListModule} from '@angular/material/grid-list'; // Para grillas
import {MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

// Para http request
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    BusquedaComponent,
    BusquedaCriteriaComponent,
    BusquedaResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [BusquedaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
