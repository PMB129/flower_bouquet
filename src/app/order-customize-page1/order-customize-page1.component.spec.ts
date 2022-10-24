import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCustomizePage1Component } from './order-customize-page1.component';

describe('OrderCustomizePage1Component', () => {
  let component: OrderCustomizePage1Component;
  let fixture: ComponentFixture<OrderCustomizePage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCustomizePage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCustomizePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
