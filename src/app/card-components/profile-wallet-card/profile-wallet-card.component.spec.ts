import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWalletCardComponent } from './profile-wallet-card.component';

describe('ProfileWalletCardComponent', () => {
  let component: ProfileWalletCardComponent;
  let fixture: ComponentFixture<ProfileWalletCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileWalletCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileWalletCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
