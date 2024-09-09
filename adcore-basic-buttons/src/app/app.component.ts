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
import { MenuComponent } from './menu/menu.component';
import { SelectComponent } from './select/select.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SideToggleComponent } from './side-toggle/side-toggle.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ChipsComponent } from './chips/chips.component';
import { TabsComponent } from './tabs/tabs.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { CdkMenuComponent } from './cdk-menu/cdk-menu.component';
import { TableComponent } from './table/table.component';
import { PaginatorComponent } from './paginator/paginator.component';

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
    MenuComponent,
    SelectComponent,
    SnackbarComponent,
    ModalComponent,
    AccordionComponent,
    ProgressBarComponent,
    SideToggleComponent,
    DatePickerComponent,
    ChipsComponent,
    TabsComponent,
    SidenavComponent,
    GridListComponent,
    CdkMenuComponent,
    TableComponent,
    PaginatorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
