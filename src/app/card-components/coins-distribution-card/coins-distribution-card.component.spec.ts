import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsDistributionCardComponent } from './coins-distribution-card.component';

describe('CoinsDistributionCardComponent', () => {
  let component: CoinsDistributionCardComponent;
  let fixture: ComponentFixture<CoinsDistributionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoinsDistributionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinsDistributionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
