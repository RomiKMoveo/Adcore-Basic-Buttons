import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  signal,
  viewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsDialog } from './dialog-animations/dialog-amination';
import { DialogContent } from './dialog-content/dialog-content';
import { DialogElements } from './dialog-elements/dialog-elements';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { DialogMenu } from './dialog-menu/dialog-menu';
import { DialogInject } from './dialog-inject/dialog-inject';
import { DialogOverview } from './dialog-overview/dialog-overview';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    DividerComponent,
    MatDividerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  readonly dialog = inject(MatDialog);
  readonly dialog2 = inject(MatDialog);
  readonly dialog3 = inject(MatDialog);
  readonly menuTrigger = viewChild.required(MatMenuTrigger);
  readonly dialog4 = inject(MatDialog);
  readonly dialog5 = inject(MatDialog);
  readonly animal = signal('');
  readonly name = model('');
  readonly dialog6 = inject(MatDialog);

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogAnimationsDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialog2() {
    const dialogRef = this.dialog2.open(DialogContent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog3() {
    this.dialog3.open(DialogElements);
  }

  openDialog4() {
    const dialogRef = this.dialog4.open(DialogMenu, { restoreFocus: false });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger().focus());
  }

  openDialog5() {
    this.dialog5.open(DialogInject, {
      data: {
        animal: 'panda',
      },
    });
  }

  openDialog6(): void {
    const dialogRef = this.dialog6.open(DialogOverview, {
      data: { name: this.name(), animal: this.animal() },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}
