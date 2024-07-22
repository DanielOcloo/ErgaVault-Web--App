import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountVerificationCard2Component } from './account-verification-card-2.component';

describe('AccountVerificationCard2Component', () => {
  let component: AccountVerificationCard2Component;
  let fixture: ComponentFixture<AccountVerificationCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountVerificationCard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountVerificationCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
