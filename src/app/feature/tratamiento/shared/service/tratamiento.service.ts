import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
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
}
