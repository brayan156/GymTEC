import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociacionTratamientosComponent } from './asociacion-tratamientos.component';

describe('AsociacionTratamientosComponent', () => {
  let component: AsociacionTratamientosComponent;
  let fixture: ComponentFixture<AsociacionTratamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociacionTratamientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociacionTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
