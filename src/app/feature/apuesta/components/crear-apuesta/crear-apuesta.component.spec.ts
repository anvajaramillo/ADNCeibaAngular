import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearApuestaComponent } from './crear-apuesta.component';

describe('CrearApuestaComponent', () => {
  let component: CrearApuestaComponent;
  let fixture: ComponentFixture<CrearApuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearApuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearApuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
