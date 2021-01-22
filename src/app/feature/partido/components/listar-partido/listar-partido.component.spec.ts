import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPartidoComponent } from './listar-partido.component';

describe('ListarPartidoComponent', () => {
  let component: ListarPartidoComponent;
  let fixture: ComponentFixture<ListarPartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
