import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { MascotaService } from '@mascota/shared/service/mascota.service';

import { ListarMascotaComponent } from './listar-mascota.component';

describe('ListarMascotaComponent', () => {
  let component: ListarMascotaComponent;
  let fixture: ComponentFixture<ListarMascotaComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
