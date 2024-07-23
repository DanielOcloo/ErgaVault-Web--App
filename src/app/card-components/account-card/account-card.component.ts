import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {
  @Input() imageSrc!: string;
  @Input() topText!: string;
  @Input() bottomText!: string;

  isDefault: boolean = false;
  private static defaultAssigned: boolean = false;  // Track if default state has been assigned

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.checkDefaultState();
  }

  toggleDefault() {
    if (!this.isDefault) {
      this.setAsDefault();
    }
  }

  setAsDefault() {
    const allInstances = document.querySelectorAll('app-account-card');
    allInstances.forEach((instance: any) => {
      const componentInstance = instance.__ngContext__.components[0] as AccountCardComponent;
      componentInstance.isDefault = false;
      componentInstance.cdr.detectChanges();  // Trigger change detection for each instance
    });

    this.isDefault = true;
    AccountCardComponent.defaultAssigned = true;  // Ensure default is assigned
    this.cdr.detectChanges();  // Trigger change detection for the current instance
  }

  private checkDefaultState() {
    if (!AccountCardComponent.defaultAssigned) {
      this.isDefault = true;
      AccountCardComponent.defaultAssigned = true;
    }
  }
}
