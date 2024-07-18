import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryButtonWithIconComponent } from './primary-button-with-icon.component';

describe('PrimaryButtonWithIconComponent', () => {
  let component: PrimaryButtonWithIconComponent;
  let fixture: ComponentFixture<PrimaryButtonWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimaryButtonWithIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryButtonWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
