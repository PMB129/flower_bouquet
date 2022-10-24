import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseOrderComponent } from './choose-order.component';

describe('ChooseOrderComponent', () => {
  let component: ChooseOrderComponent;
  let fixture: ComponentFixture<ChooseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
