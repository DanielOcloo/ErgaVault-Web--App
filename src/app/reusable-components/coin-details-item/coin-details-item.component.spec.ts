import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDetailsItemComponent } from './coin-details-item.component';

describe('CoinDetailsItemComponent', () => {
  let component: CoinDetailsItemComponent;
  let fixture: ComponentFixture<CoinDetailsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoinDetailsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
