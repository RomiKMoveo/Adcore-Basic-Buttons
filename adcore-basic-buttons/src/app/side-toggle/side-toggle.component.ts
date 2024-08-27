import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

/**
 * @title Basic slide-toggles
 */
@Component({
  selector: 'app-side-toggle',
  standalone: true,
  imports: [MatDividerModule, MatSlideToggleModule],
  templateUrl: './side-toggle.component.html',
  styleUrl: './side-toggle.component.css',
})
export class SideToggleComponent {}
