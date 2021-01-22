import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarApuestaComponent } from './borrar-apuesta.component';

describe('BorrarApuestaComponent', () => {
  let component: BorrarApuestaComponent;
  let fixture: ComponentFixture<BorrarApuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarApuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarApuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
