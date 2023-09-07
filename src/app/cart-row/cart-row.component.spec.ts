import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartRowComponent } from './cart-row.component';

describe('CartRowComponent', () => {
  let component: CartRowComponent;
  let fixture: ComponentFixture<CartRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartRowComponent]
    });
    fixture = TestBed.createComponent(CartRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
