import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { TratamientoService } from './tratamiento.service';

describe('TratamientoService', () => {
  let service: TratamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TratamientoService, HttpService]
    });
    service = TestBed.inject(TratamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
