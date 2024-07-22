import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-outline-orange',
  templateUrl: './button-outline-orange.component.html',
  styleUrl: './button-outline-orange.component.css'
})
export class ButtonOutlineOrangeComponent {
  @Input() link: string = '';
  @Input() text: string = 'Button';
  @Input() imageUrl: string = '';
}
