import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';

/**
 * @title Basic cards
 */
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
    MatChipsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;
}
