import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorDesvirtuadoComponent } from './proveedor-desvirtuado.component';

describe('ProveedorDesvirtuadoComponent', () => {
  let component: ProveedorDesvirtuadoComponent;
  let fixture: ComponentFixture<ProveedorDesvirtuadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorDesvirtuadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorDesvirtuadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
