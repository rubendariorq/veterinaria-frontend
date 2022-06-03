import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTratamientoComponent } from './listar-tratamiento.component';

describe('ListarTratamientoComponent', () => {
  let component: ListarTratamientoComponent;
  let fixture: ComponentFixture<ListarTratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTratamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
