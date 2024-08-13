import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicButtonsComponent } from './basic-buttons/basic-buttons.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { BasicInputComponent } from './basic-input/basic-input.component';
import { CommentComponent } from './comment/comment.component';

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
    CardComponent,
    BasicInputComponent,
    CommentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
