import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociacionInventarioComponent } from './asociacion-inventario.component';

describe('AsociacionInventarioComponent', () => {
  let component: AsociacionInventarioComponent;
  let fixture: ComponentFixture<AsociacionInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociacionInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociacionInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
