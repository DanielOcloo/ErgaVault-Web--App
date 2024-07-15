import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBalanceDistributionComponent } from './wallet-balance-distribution.component';

describe('WalletBalanceDistributionComponent', () => {
  let component: WalletBalanceDistributionComponent;
  let fixture: ComponentFixture<WalletBalanceDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WalletBalanceDistributionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletBalanceDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
