import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinSummaryCardItemComponent } from './coin-summary-card-item.component';

describe('CoinSummaryCardItemComponent', () => {
  let component: CoinSummaryCardItemComponent;
  let fixture: ComponentFixture<CoinSummaryCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoinSummaryCardItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinSummaryCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
