import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcontainerComponent } from './dashcontainer.component';

describe('DashcontainerComponent', () => {
  let component: DashcontainerComponent;
  let fixture: ComponentFixture<DashcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
