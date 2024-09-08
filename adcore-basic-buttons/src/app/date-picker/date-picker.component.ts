import { MatDividerModule } from '@angular/material/divider';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  provideNativeDateAdapter,
} from '@angular/material/core';
import {
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatCalendar,
  MatCalendarCellClassFunction,
  MatDateRangeSelectionStrategy,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { startWith, Subject, takeUntil } from 'rxjs';

@Injectable()
export class FiveDayRangeSelectionStrategy<D>
  implements MatDateRangeSelectionStrategy<D>
{
  private _dateAdapter = inject<DateAdapter<D>>(DateAdapter<D>);

  selectionFinished(date: D | null): DateRange<D> {
    return this._createFiveDayRange(date);
  }

  createPreview(activeDate: D | null): DateRange<D> {
    return this._createFiveDayRange(activeDate);
  }

  private _createFiveDayRange(date: D | null): DateRange<D> {
    if (date) {
      const start = this._dateAdapter.addCalendarDays(date, -2);
      const end = this._dateAdapter.addCalendarDays(date, 2);
      return new DateRange<D>(start, end);
    }

    return new DateRange<D>(null, null);
  }
}

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [
    MatDividerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: FiveDayRangeSelectionStrategy,
    },
    provideNativeDateAdapter(),
  ],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent {
  readonly campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  readonly campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });

  readonly exampleHeader = ExampleHeader;

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };
}

/** Custom header component for datepicker. */
@Component({
  selector: 'example-header',
  styles: `
    .example-header {
      display: flex;
      align-items: center;
      padding: 0.5em;
    }

    .example-header-label {
      flex: 1;
      height: 1em;
      font-weight: 500;
      text-align: center;
    }
  `,
  template: `
    <div class="example-header">
      <button mat-icon-button (click)="previousClicked('year')">
        <mat-icon>keyboard_double_arrow_left</mat-icon>
      </button>
      <button mat-icon-button (click)="previousClicked('month')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="example-header-label">{{ periodLabel() }}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
      <button mat-icon-button (click)="nextClicked('year')">
        <mat-icon>keyboard_double_arrow_right</mat-icon>
      </button>
    </div>
  `,
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleHeader<D> implements OnDestroy {
  private _calendar = inject<MatCalendar<D>>(MatCalendar);
  private _dateAdapter = inject<DateAdapter<D>>(DateAdapter);
  private _dateFormats = inject(MAT_DATE_FORMATS);

  private _destroyed = new Subject<void>();

  readonly periodLabel = signal('');

  constructor() {
    this._calendar.stateChanges
      .pipe(startWith(null), takeUntil(this._destroyed))
      .subscribe(() => {
        this.periodLabel.set(
          this._dateAdapter
            .format(
              this._calendar.activeDate,
              this._dateFormats.display.monthYearLabel
            )
            .toLocaleUpperCase()
        );
      });
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  previousClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
  }

  nextClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
  }
}
