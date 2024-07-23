import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutAccountCardComponent } from './payout-account-card.component';

describe('PayoutAccountCardComponent', () => {
  let component: PayoutAccountCardComponent;
  let fixture: ComponentFixture<PayoutAccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayoutAccountCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayoutAccountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
