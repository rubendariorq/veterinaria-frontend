import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Mascota } from '@mascota/shared/model/mascota';
import { Cupon } from 'src/app/feature/cupon/shared/model/cupon';
import { Servicio } from 'src/app/feature/servicio/shared/model/servicio';
import { environment } from 'src/environments/environment';
import { Tratamiento } from '../model/tratamiento';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(protected http: HttpService) {  }

  public consultar() {
    return this.http.doGet<Tratamiento[]>(`${environment.endpoint}/tratamiento`, this.http.optsName('consultar tratamientos'));
  }

  public guardar(tratamiento: Tratamiento) {
    return this.http.doPost<Tratamiento, boolean>(`${environment.endpoint}/tratamiento`, tratamiento, this.http.optsName('crear tratamiento'));
  }

  public listarCupones(idMascota: Number) {
    return this.http.doGet<Cupon[]>(`${environment.endpoint}/cupon/${idMascota}`, this.http.optsName('consultar cupones'));
  }

  public listarServicios() {
    return this.http.doGet<Servicio[]>(`${environment.endpoint}/servicio`, this.http.optsName('consultar servicios'));
  }

  public listarMascotas() {
    return this.http.doGet<Mascota[]>(`${environment.endpoint}/mascota`, this.http.optsName('consultar mascotas'));
  }

  public eliminar(tratamiento: Tratamiento) {
    return this.http.doDelete<any>(`${environment.endpoint}/tratamiento/${tratamiento.id}`, this.http.optsName('eliminar tratamiento'))
  }

  public consultarTratamiento(tratamiento: Tratamiento) {
    return this.http.doGet<Tratamiento>(`${environment.endpoint}/tratamiento/${tratamiento.id}`, this.http.optsName('consultar tratamiento'));
  }
}
