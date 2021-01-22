import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarApuestaComponent } from './editar-apuesta.component';

describe('EditarApuestaComponent', () => {
  let component: EditarApuestaComponent;
  let fixture: ComponentFixture<EditarApuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarApuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarApuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
