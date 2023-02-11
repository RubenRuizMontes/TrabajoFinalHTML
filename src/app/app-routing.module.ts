import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './usuario/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //redirige a home cuando no hay informacion luego del slash
  {path:'home', component: HomeComponent},  // si yo entro a /home rediregeme al compomente home
  {path:'login', component: LoginComponent}, // si yo entro a /login rediregeme al compomente login
  {path:'busqueda', component: BusquedaComponent},
  {path:'contacto',component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
