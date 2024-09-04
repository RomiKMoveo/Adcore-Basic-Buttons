import { MatDividerModule } from '@angular/material/divider';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  model,
  signal,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * @title Chips Autocomplete
 */
@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [
    MatDividerModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css',
})
export class ChipsComponent {
  readonly bestBoys: string[] = [
    'Pricing',
    'Add-ons',
    'Payment terms',
    'Add-ons',
  ];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly currentFruit = model('');
  readonly fruits = signal(['Lemon']);
  readonly allFruits: string[] = [
    'Apple',
    'Lemon',
    'Lime',
    'Orange',
    'Strawberry',
  ];
  readonly filteredFruits = computed(() => {
    const currentFruit = this.currentFruit().toLowerCase();
    return currentFruit
      ? this.allFruits.filter((fruit) =>
          fruit.toLowerCase().includes(currentFruit)
        )
      : this.allFruits.slice();
  });

  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.update((fruits) => [...fruits, value]);
    }

    // Clear the input value
    this.currentFruit.set('');
  }

  remove(fruit: string): void {
    this.fruits.update((fruits) => {
      const index = fruits.indexOf(fruit);
      if (index < 0) {
        return fruits;
      }

      fruits.splice(index, 1);
      this.announcer.announce(`Removed ${fruit}`);
      return [...fruits];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.update((fruits) => [...fruits, event.option.viewValue]);
    this.currentFruit.set('');
    event.option.deselect();
  }

  readonly reactiveKeywords = signal([
    'angular',
    'how-to',
    'tutorial',
    'accessibility',
  ]);
  readonly formControl = new FormControl(['angular']);

  announcer2 = inject(LiveAnnouncer);

  removeReactiveKeyword(keyword: string) {
    this.reactiveKeywords.update((keywords) => {
      const index = keywords.indexOf(keyword);
      if (index < 0) {
        return keywords;
      }

      keywords.splice(index, 1);
      this.announcer2.announce(`removed ${keyword} from reactive form`);
      return [...keywords];
    });
  }

  addReactiveKeyword(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.reactiveKeywords.update((keywords) => [...keywords, value]);
      this.announcer2.announce(`added ${value} to reactive form`);
    }

    // Clear the input value
    event.chipInput!.clear();
  }
}
