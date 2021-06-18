import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociacionProductosComponent } from './asociacion-productos.component';

describe('AsociacionProductosComponent', () => {
  let component: AsociacionProductosComponent;
  let fixture: ComponentFixture<AsociacionProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociacionProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociacionProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
