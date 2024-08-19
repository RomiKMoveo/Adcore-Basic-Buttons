import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicButtonsComponent } from './basic-buttons/basic-buttons.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { BasicInputComponent } from './basic-input/basic-input.component';
import { CommentComponent } from './comment/comment.component';
import { BadgeComponent } from './badge/badge.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './list/list.component';
import { DividerComponent } from './divider/divider.component';

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
    BadgeComponent,
    CheckboxComponent,
    RadioComponent,
    TooltipComponent,
    ToolbarComponent,
    ListComponent,
    DividerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
