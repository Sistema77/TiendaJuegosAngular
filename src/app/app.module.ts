import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlquileresComponent } from './Vistas/alquileres/alquileres.component';
import { JuegosComponent } from './Vistas/juegos/juegos.component';
import { UsuarioComponent } from './Vistas/usuario/usuario.component';
import { ListadoComponent } from './Vistas/juegos/listado/listado.component';
import { DetalleComponent } from './Vistas/juegos/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    AlquileresComponent,
    JuegosComponent,
    UsuarioComponent,
    ListadoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
