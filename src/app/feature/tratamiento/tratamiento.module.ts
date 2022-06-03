import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { CrearTratamientoComponent } from "./components/crear-tratamiento/crear-tratamiento.component";
import { TratamientoComponent } from "./components/tratamiento/tratamiento.component";
import { TratamientoService } from "./shared/service/tratamiento.service";
import { TratamientoRoutingModule } from "./tratamiento-routing.module";
import { ListarTratamientoComponent } from './components/listar-tratamiento/listar-tratamiento.component';

@NgModule({
  declarations: [
    TratamientoComponent,
    CrearTratamientoComponent,
    ListarTratamientoComponent
  ],
  imports: [
    TratamientoRoutingModule,
    SharedModule
  ],
  providers: [TratamientoService]
})
export class TratamientoModule { }