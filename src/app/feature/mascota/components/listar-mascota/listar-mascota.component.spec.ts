import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { Mascota } from '@mascota/shared/model/mascota';
import { MascotaService } from '@mascota/shared/service/mascota.service';
import { of } from 'rxjs';

import { ListarMascotaComponent } from './listar-mascota.component';

describe('ListarMascotaComponent', () => {
  let component: ListarMascotaComponent;
  let fixture: ComponentFixture<ListarMascotaComponent>;
  let mascotaService: MascotaService;
  const listaMascotas: Mascota[] = [
    new Mascota(1, 'MASC001', 'Manotas', 1, null),
    new Mascota(2, 'MASC002', 'Princesa', 2, null)
  ]

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMascotaComponent ],
      imports: [CommonModule, HttpClientTestingModule],
      providers: [MascotaService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMascotaComponent);
    component = fixture.componentInstance;

    mascotaService = TestBed.inject(MascotaService);
    spyOn(mascotaService, 'consultar').and.returnValue(of(listaMascotas));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia listar mascotas correctamente', () => {
    component['listarMascotas']();
    expect(mascotaService.consultar).toHaveBeenCalled();
    expect(2).toBeGreaterThanOrEqual(component.mascotas.length);
  });
});
