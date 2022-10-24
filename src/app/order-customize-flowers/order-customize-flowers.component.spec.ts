import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCustomizeFlowersComponent } from './order-customize-flowers.component';

describe('OrderCustomizeFlowersComponent', () => {
  let component: OrderCustomizeFlowersComponent;
  let fixture: ComponentFixture<OrderCustomizeFlowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCustomizeFlowersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCustomizeFlowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
