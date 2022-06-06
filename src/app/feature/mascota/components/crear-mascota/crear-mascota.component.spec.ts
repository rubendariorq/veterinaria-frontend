import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { MascotaService } from '@mascota/shared/service/mascota.service';
import { of } from 'rxjs';

import { CrearMascotaComponent } from './crear-mascota.component';

describe('CrearMascotaComponent', () => {
  let component: CrearMascotaComponent;
  let fixture: ComponentFixture<CrearMascotaComponent>;
  let mascotaService: MascotaService;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ CrearMascotaComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [MascotaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMascotaComponent);
    component = fixture.componentInstance;
    mascotaService = TestBed.inject(MascotaService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia registrar mascota correctamente', () => {
    spyOn(mascotaService, 'guardar').and.returnValue(of(true));

    expect(component.mascotaForm.valid).toBeFalsy();
    component.mascotaForm.controls.codigoMascota.setValue('MASC001');
    component.mascotaForm.controls.nombre.setValue('Harry');
    component.mascotaForm.controls.tipoMascota.setValue('1');
    expect(component.mascotaForm.valid).toBeTruthy();

    component.registrar();
    expect(mascotaService.guardar).toHaveBeenCalled();
  });
});
