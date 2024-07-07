import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsDistributionSummaryCardComponent } from './coins-distribution-summary-card.component';

describe('CoinsDistributionSummaryCardComponent', () => {
  let component: CoinsDistributionSummaryCardComponent;
  let fixture: ComponentFixture<CoinsDistributionSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoinsDistributionSummaryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinsDistributionSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
