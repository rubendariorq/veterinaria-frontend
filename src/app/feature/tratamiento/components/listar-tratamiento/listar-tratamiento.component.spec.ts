import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Tratamiento } from '@tratamiento/shared/model/tratamiento';
import { TratamientoService } from '@tratamiento/shared/service/tratamiento.service';
import { of } from 'rxjs';

import { ListarTratamientoComponent } from './listar-tratamiento.component';

describe('ListarTratamientoComponent', () => {
  let component: ListarTratamientoComponent;
  let fixture: ComponentFixture<ListarTratamientoComponent>;
  let tratamientoService: TratamientoService;
  const listaTratamientos: Tratamiento[] = [
    new Tratamiento(1, 'TRAT001', 1, '2022-06-06', '2022-06-09', 3, 2, null, null),
    new Tratamiento(2, 'TRAT002', 1, '2022-06-07', '2022-06-09', 2, 1, null, null),
  ]
  const tratamiento: Tratamiento = new Tratamiento(1, 'TRAT001', 1, '2022-06-06', '2022-06-09', 3, 2, null, null);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTratamientoComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [TratamientoService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTratamientoComponent);
    component = fixture.componentInstance;

    tratamientoService = TestBed.inject(TratamientoService);
    spyOn(tratamientoService, 'consultar').and.returnValue(of(listaTratamientos));
    spyOn(tratamientoService, 'consultarTratamiento').and.returnValue(of(tratamiento));
    spyOn(tratamientoService, 'eliminar').and.returnValue(of(null));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia listar tratamientos correctamente', () => {
    component['listarTratamientos']();
    expect(tratamientoService.consultar).toHaveBeenCalled();
    expect(2).toBeGreaterThanOrEqual(component.tratamientos.length);
  });

  it('deberia consultar un tratamiento correctamente', () => {
    component.consultaTratamiento(tratamiento);
    expect(tratamientoService.consultarTratamiento).toHaveBeenCalled();
  });

  it('deberia eliminar tratamiento correctamente', () => {
    component.eliminar(tratamiento);
    expect(tratamientoService.eliminar).toHaveBeenCalled();
  });
});
