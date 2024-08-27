import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

/**
 * @title Buffer progress-bar
 */
@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [MatDividerModule, MatProgressBarModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css',
})
export class ProgressBarComponent {}
