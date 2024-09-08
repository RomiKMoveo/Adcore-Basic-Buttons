import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-cdk-menu',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './cdk-menu.component.html',
  styleUrl: './cdk-menu.component.css',
})
export class CdkMenuComponent {}
