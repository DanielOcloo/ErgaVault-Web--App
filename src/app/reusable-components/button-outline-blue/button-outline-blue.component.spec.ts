import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOutlineBlueComponent } from './button-outline-blue.component';

describe('ButtonOutlineBlueComponent', () => {
  let component: ButtonOutlineBlueComponent;
  let fixture: ComponentFixture<ButtonOutlineBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonOutlineBlueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonOutlineBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
