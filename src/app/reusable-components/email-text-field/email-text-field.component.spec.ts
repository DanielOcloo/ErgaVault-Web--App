import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTextFieldComponent } from './email-text-field.component';

describe('EmailTextFieldComponent', () => {
  let component: EmailTextFieldComponent;
  let fixture: ComponentFixture<EmailTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailTextFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
