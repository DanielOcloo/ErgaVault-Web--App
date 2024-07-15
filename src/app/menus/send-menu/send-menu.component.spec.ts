import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMenuComponent } from './send-menu.component';

describe('SendMenuComponent', () => {
  let component: SendMenuComponent;
  let fixture: ComponentFixture<SendMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
