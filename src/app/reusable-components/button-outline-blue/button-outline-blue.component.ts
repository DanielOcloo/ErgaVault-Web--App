import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-outline-blue',
  templateUrl: './button-outline-blue.component.html',
  styleUrl: './button-outline-blue.component.css'
})
export class ButtonOutlineBlueComponent {
  @Input() link: string = '';
  @Input() text: string = 'Button';
  @Input() imageUrl: string = '';
}
