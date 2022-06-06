import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Tratamiento } from '../model/tratamiento';

import { TratamientoService } from './tratamiento.service';

describe('TratamientoService', () => {
  let service: TratamientoService;
  let httpMock: HttpTestingController;
  const apiEndpointTratamientos = `${environment.endpoint}/tratamiento`

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TratamientoService, HttpService]
    });
    service = TestBed.inject(TratamientoService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia listar los tratamientos correctamente', () => {
    const dummyTratamientos = [
      new Tratamiento(1, 'TRAT001', 1, '2022-06-06', '2022-06-09', 3, 2, null, null),
      new Tratamiento(2, 'TRAT002', 1, '2022-06-07', '2022-06-09', 2, 1, null, null),
    ]

    service.consultar().subscribe(tratamientos => {
      expect(tratamientos.length).toBe(2);
      expect(tratamientos).toBe(dummyTratamientos);
    });

    const req = httpMock.expectOne(apiEndpointTratamientos);
    expect(req.request.method).toBe('GET');
    req.flush(dummyTratamientos);
  });

  it('deberia crear un tratamiento', () => {
    const dummyTratamiento = new Tratamiento(1, 'TRAT001', 1, '2022-06-06', '2022-06-09', 3, 2, null, null);
    service.guardar(dummyTratamiento).subscribe(respuesta => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointTratamientos);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un tratamiento', () => {
    const dummyTratamiento = new Tratamiento(1, 'TRAT001', 1, '2022-06-06', '2022-06-09', 3, 2, null, null);
    service.eliminar(dummyTratamiento).subscribe(respuesta => {
      expect(respuesta).toEqual(null);
    });
    const req = httpMock.expectOne(`${apiEndpointTratamientos}/${dummyTratamiento.id}`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<any>());
  });

  it('deberia consultar un tratamiento', () => {
    const dummyTratamiento = new Tratamiento(1, 'TRAT001', 1, '2022-06-06', '2022-06-09', 3, 2, null, null);
    service.consultarTratamiento(dummyTratamiento).subscribe(respuesta => {
      expect(respuesta).toEqual(dummyTratamiento);
    });
    const req = httpMock.expectOne(`${apiEndpointTratamientos}/${dummyTratamiento.id}`);
    expect(req.request.method).toBe('GET');
    req.event(new HttpResponse<Tratamiento>({body: dummyTratamiento}));
  });
});
