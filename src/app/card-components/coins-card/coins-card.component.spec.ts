import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsCardComponent } from './coins-card.component';

describe('CoinsCardComponent', () => {
  let component: CoinsCardComponent;
  let fixture: ComponentFixture<CoinsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoinsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
