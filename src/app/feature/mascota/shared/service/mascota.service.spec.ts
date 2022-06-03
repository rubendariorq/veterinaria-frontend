import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { MascotaService } from './mascota.service';

describe('MascotaService', () => {
  let service: MascotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MascotaService, HttpService]
    });
    service = TestBed.inject(MascotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
