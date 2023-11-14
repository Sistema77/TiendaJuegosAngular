import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './Vistas/juegos/juegos.component';
import { UsuarioComponent } from './Vistas/usuario/usuario.component';
import { AlquileresComponent } from './Vistas/alquileres/alquileres.component';
import { ListadoComponent } from './Vistas/juegos/listado/listado.component';
import { DetalleComponent } from './Vistas/juegos/detalle/detalle.component';

const routes: Routes = [
  {path: "juegos", component : JuegosComponent, children : [
    {path: "listado", component :ListadoComponent},
    {path: "edit/:id", component : DetalleComponent},
    {path: "detalle", component : DetalleComponent}
  ]},
  {path: "usuarios", component : UsuarioComponent},
  {path: "alquileres", component : AlquileresComponent},
  {path: "", redirectTo : "juegos", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
