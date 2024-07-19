import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryButtonWithIconComponent } from './secondary-button-with-icon.component';

describe('SecondaryButtonWithIconComponent', () => {
  let component: SecondaryButtonWithIconComponent;
  let fixture: ComponentFixture<SecondaryButtonWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondaryButtonWithIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryButtonWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
