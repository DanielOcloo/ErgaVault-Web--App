import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerificationNewuserComponent } from './email-verification-newuser.component';

describe('EmailVerificationNewuserComponent', () => {
  let component: EmailVerificationNewuserComponent;
  let fixture: ComponentFixture<EmailVerificationNewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailVerificationNewuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailVerificationNewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
