import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { MascotaService } from '@mascota/shared/service/mascota.service';

import { CrearMascotaComponent } from './crear-mascota.component';

describe('CrearMascotaComponent', () => {
  let component: CrearMascotaComponent;
  let fixture: ComponentFixture<CrearMascotaComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
