import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderArrangedComponent } from './order-arranged.component';

describe('OrderArrangedComponent', () => {
  let component: OrderArrangedComponent;
  let fixture: ComponentFixture<OrderArrangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderArrangedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderArrangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
