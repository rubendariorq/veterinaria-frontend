import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Mascota } from '../model/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Mascota[]>(`${environment.endpoint}/mascota`, this.http.optsName('consultar mascotas'));
  }
}
