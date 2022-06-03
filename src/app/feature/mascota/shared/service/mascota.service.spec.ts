import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Mascota } from '../model/mascota';

import { MascotaService } from './mascota.service';

describe('MascotaService', () => {
  let service: MascotaService;
  let httpMock: HttpTestingController;
  const apiEndpointMascotas = `${environment.endpoint}/mascota`

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MascotaService, HttpService]
    });
    service = TestBed.inject(MascotaService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia listar las mascotas correctamente', () => {
    const dummyMascotas = [
      new Mascota(1, 'MASC001', 'Manotas', 1, null),
      new Mascota(2, 'MASC002', 'Harry', 1, null) 
    ]

    service.consultar().subscribe(mascotas => {
      expect(mascotas.length).toBe(2);
      expect(mascotas).toBe(dummyMascotas);
    });

    const req = httpMock.expectOne(apiEndpointMascotas);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMascotas);
  });
});
