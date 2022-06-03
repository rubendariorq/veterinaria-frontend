import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearTratamientoComponent } from "./components/crear-tratamiento/crear-tratamiento.component";
import { ListarTratamientoComponent } from "./components/listar-tratamiento/listar-tratamiento.component";
import { TratamientoComponent } from "./components/tratamiento/tratamiento.component";

const routes: Routes = [
  {
    path: '',
    component: TratamientoComponent,
    children: [
      {
        path: 'crear',
        component: CrearTratamientoComponent
      },
      {
        path: 'listar',
        component: ListarTratamientoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TratamientoRoutingModule { }