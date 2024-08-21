import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export interface Section {
  icon: string;
  name: string;
  updated: Date;
}

/**
 * @title Basic list
 */
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatDividerModule, DatePipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];

  folders: Section[] = [
    {
      icon: '../../assets/OS-icon.svg',
      name: 'Osher Sitone',
      updated: new Date('1/1/16'),
    },
    {
      icon: '../../assets/AO-icon.svg',
      name: 'Amit Ohayon',
      updated: new Date('2/15/25'),
    },
    {
      icon: '../../assets/OB-icon.svg',
      name: 'Omri Brill',
      updated: new Date('2/15/25'),
    },
  ];
}
