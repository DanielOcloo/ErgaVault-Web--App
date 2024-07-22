import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOutlineOrangeComponent } from './button-outline-orange.component';

describe('ButtonOutlineOrangeComponent', () => {
  let component: ButtonOutlineOrangeComponent;
  let fixture: ComponentFixture<ButtonOutlineOrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonOutlineOrangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonOutlineOrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
