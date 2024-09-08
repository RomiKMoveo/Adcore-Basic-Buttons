import {
  CdkContextMenuTrigger,
  CdkMenu,
  CdkMenuBar,
  CdkMenuGroup,
  CdkMenuItem,
  CdkMenuItemCheckbox,
  CdkMenuItemRadio,
  CdkMenuTrigger,
} from '@angular/cdk/menu';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-cdk-menu',
  standalone: true,
  imports: [
    MatDividerModule,
    CdkContextMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    CdkMenuBar,
    CdkMenuItem,
    CdkMenuTrigger,
    CdkMenuGroup,
    CdkMenuItemCheckbox,
    CdkMenuItemRadio,
  ],
  templateUrl: './cdk-menu.component.html',
  styleUrl: './cdk-menu.component.css',
})
export class CdkMenuComponent {
  bold = false;
  italic = false;

  sizes = ['Small', 'Normal', 'Large'];
  selectedSize: string | undefined = 'Normal';

  reset() {
    this.bold = false;
    this.italic = false;
    this.selectedSize = 'Normal';
  }
}
