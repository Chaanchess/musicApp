import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarcancionComponent } from './buscarcancion.component';

describe('BuscarcancionComponent', () => {
  let component: BuscarcancionComponent;
  let fixture: ComponentFixture<BuscarcancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarcancionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarcancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
