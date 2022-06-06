import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { TratamientoService } from '@tratamiento/shared/service/tratamiento.service';

import { CrearTratamientoComponent } from './crear-tratamiento.component';

describe('CrearTratamientoComponent', () => {
  let component: CrearTratamientoComponent;
  let fixture: ComponentFixture<CrearTratamientoComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
