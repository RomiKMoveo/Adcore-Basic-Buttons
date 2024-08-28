import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'dialog-animations',
  templateUrl: 'dialog-animations.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatIcon,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsDialog {
  readonly dialogRef = inject(MatDialogRef<DialogAnimationsDialog>);
}
