import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'dialog-inject',
  templateUrl: 'dialog-inject.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatIcon, MatButtonModule],
})
export class DialogInject {
  data = inject(MAT_DIALOG_DATA);
}
