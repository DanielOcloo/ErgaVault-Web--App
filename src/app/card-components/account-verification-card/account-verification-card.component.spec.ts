import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountVerificationCardComponent } from './account-verification-card.component';

describe('AccountVerificationCardComponent', () => {
  let component: AccountVerificationCardComponent;
  let fixture: ComponentFixture<AccountVerificationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountVerificationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountVerificationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
