import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorFavorableComponent } from './proveedor-favorable.component';

describe('ProveedorFavorableComponent', () => {
  let component: ProveedorFavorableComponent;
  let fixture: ComponentFixture<ProveedorFavorableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorFavorableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorFavorableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
