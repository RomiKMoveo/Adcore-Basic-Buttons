import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'dialog-inject',
  templateUrl: 'dialog-inject.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
})
export class DialogInject {
  data = inject(MAT_DIALOG_DATA);
}
