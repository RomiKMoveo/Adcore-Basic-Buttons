import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-basic-buttons',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, CommonModule, MatIconModule],
  templateUrl: './basic-buttons.component.html',
  styleUrl: './basic-buttons.component.css',
})
export class BasicButtonsComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
