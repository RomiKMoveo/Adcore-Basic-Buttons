import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicButtonsComponent } from './basic-buttons/basic-buttons.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BasicButtonsComponent,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'adcore-basic-buttons';
}
