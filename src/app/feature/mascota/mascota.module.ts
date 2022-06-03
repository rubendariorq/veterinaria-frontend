import { NgModule } from "@angular/core";

import { MascotaRoutingModule } from "./mascota-routing.module";
import { ListarMascotaComponent } from "./components/listar-mascota/listar-mascota.component";
import { MascotaComponent } from "./components/mascota/mascota.component";
import { SharedModule } from "@shared/shared.module";
import { MascotaService } from "./shared/service/mascota.service";
import { CrearMascotaComponent } from './components/crear-mascota/crear-mascota.component';

@NgModule({
  declarations: [
    ListarMascotaComponent,
    MascotaComponent,
    CrearMascotaComponent
  ],
  imports: [
    MascotaRoutingModule,
    SharedModule
  ],
  providers: [MascotaService]
})
export class MascotaModule { }
