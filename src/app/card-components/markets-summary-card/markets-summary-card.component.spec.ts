import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsSummaryCardComponent } from './markets-summary-card.component';

describe('MarketsSummaryCardComponent', () => {
  let component: MarketsSummaryCardComponent;
  let fixture: ComponentFixture<MarketsSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketsSummaryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketsSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
