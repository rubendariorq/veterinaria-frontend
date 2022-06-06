import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Mascota } from '@mascota/shared/model/mascota';
import { TratamientoService } from '@tratamiento/shared/service/tratamiento.service';
import { of } from 'rxjs';
import { Cupon } from 'src/app/feature/cupon/shared/model/cupon';
import { Servicio } from 'src/app/feature/servicio/shared/model/servicio';

import { CrearTratamientoComponent } from './crear-tratamiento.component';

describe('CrearTratamientoComponent', () => {
  let component: CrearTratamientoComponent;
  let fixture: ComponentFixture<CrearTratamientoComponent>;
  let tratamientoService: TratamientoService;
  const listaServicios: Servicio[] = [new Servicio('tratamiento estetico', 25000), new Servicio('tratamiento medico', 50000)];
  const listaMascotas: Mascota[] = [new Mascota(1, 'MASC001', 'Harry', 1, null), new Mascota(2, 'MASC002', 'Princesa', 2, null)];
  const listaCupones: Cupon[] = [new Cupon('HarryWELCOME', 0.10, '2022-06-09', 1), new Cupon('PrincesaWELCOME', 0.10, '2022-06-08', 2)];
  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ CrearTratamientoComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [TratamientoService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTratamientoComponent);
    component = fixture.componentInstance;
    tratamientoService = TestBed.inject(TratamientoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia registrar tratamiento correctamente', () => {
    spyOn(tratamientoService, 'listarServicios').and.returnValue(of(listaServicios));
    spyOn(tratamientoService, 'listarMascotas').and.returnValue(of(listaMascotas));
    spyOn(tratamientoService, 'listarCupones').and.returnValue(of(listaCupones));

    component['listarMascotas']();
    component['listarServicios']();
    component['listarCupones'](1);

    spyOn(tratamientoService, 'guardar').and.returnValue(of(true));

    expect(component.tratamientoForm.valid).toBeFalsy();
    component.tratamientoForm.controls.codigoTratamiento.setValue('TRAT001');
    component.tratamientoForm.controls.idMascota.setValue('1');
    component.tratamientoForm.controls.fechaInicio.setValue('2022-06-06');
    component.tratamientoForm.controls.fechaFin.setValue('2022-06-09');
    component.tratamientoForm.controls.idServicio.setValue('1');
    component.tratamientoForm.controls.tipoTratamiento.setValue('1');
    component.tratamientoForm.controls.idCupon.setValue('1');
    expect(component.tratamientoForm.valid).toBeTruthy();

   
    component.registrar();
    expect(tratamientoService.guardar).toHaveBeenCalled();
  });
});
