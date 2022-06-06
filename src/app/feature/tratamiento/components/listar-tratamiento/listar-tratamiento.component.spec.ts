import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { TratamientoService } from '@tratamiento/shared/service/tratamiento.service';

import { ListarTratamientoComponent } from './listar-tratamiento.component';

describe('ListarTratamientoComponent', () => {
  let component: ListarTratamientoComponent;
  let fixture: ComponentFixture<ListarTratamientoComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
