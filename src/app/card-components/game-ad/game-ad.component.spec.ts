import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAdComponent } from './game-ad.component';

describe('GameAdComponent', () => {
  let component: GameAdComponent;
  let fixture: ComponentFixture<GameAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
