import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorPresuntoComponent } from './proveedor-presunto.component';

describe('ProveedorPresuntoComponent', () => {
  let component: ProveedorPresuntoComponent;
  let fixture: ComponentFixture<ProveedorPresuntoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorPresuntoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorPresuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
