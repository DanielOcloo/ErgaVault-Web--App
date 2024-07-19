import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button-with-icon',
  templateUrl: './secondary-button-with-icon.component.html',
  styleUrl: './secondary-button-with-icon.component.css'
})
export class SecondaryButtonWithIconComponent {
  @Input() link: string = '';
  @Input() text: string = 'Button';
  @Input() imageUrl: string = '';
}
