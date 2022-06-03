import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarMascotaComponent } from './components/listar-mascota/listar-mascota.component';
import { MascotaComponent } from './components/mascota/mascota.component';

const routes: Routes = [
  {
    path: '',
    component: MascotaComponent,
    children: [
      {
        path: 'listar',
        component: ListarMascotaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MascotaRoutingModule { }