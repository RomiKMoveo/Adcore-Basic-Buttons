import { Component, signal, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroupDirective,
  FormsModule,
  NgForm,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'app-basic-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './basic-input.component.html',
  styleUrl: './basic-input.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class BasicInputComponent {
  value = 'fsdfsdf';
  placeholder = 'Company name';
  isDisabled = false;
  hasFocus: boolean = false;

  errorValue = ' ';
  isError: boolean = false;

  validateInput(): void {
    this.isError = !this.errorValue; // Set to true if the input is empty
  }

  // Clears the input and the error state
  clearErrorInput(): void {
    this.errorValue = '';
    this.isError = false;
  }
  clearInput() {
    this.value = '';
  }

  readonly email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
}
