import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsSummaryCardComponent } from './coins-summary-card.component';

describe('CoinsSummaryCardComponent', () => {
  let component: CoinsSummaryCardComponent;
  let fixture: ComponentFixture<CoinsSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoinsSummaryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinsSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
