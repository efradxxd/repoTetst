import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorDefinitivoComponent } from './proveedor-definitivo.component';

describe('ProveedorDefinitivoComponent', () => {
  let component: ProveedorDefinitivoComponent;
  let fixture: ComponentFixture<ProveedorDefinitivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorDefinitivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorDefinitivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
