import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-grid-list',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.css',
})
export class GridListComponent {}
