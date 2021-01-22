import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPartidoComponent } from './borrar-partido.component';

describe('BorrarPartidoComponent', () => {
  let component: BorrarPartidoComponent;
  let fixture: ComponentFixture<BorrarPartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarPartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
