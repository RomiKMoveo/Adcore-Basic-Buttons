import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [MatDividerModule, MatTabsModule, MatIconModule, MatButtonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {
  lotsOfTabs = new Array(5).fill(0).map((_, index) => `Tab ${index}`);

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }
}
