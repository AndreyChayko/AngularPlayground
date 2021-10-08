import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ItemConfig } from './models/item-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationItemComponent {
  @Input()
  allTextValues!: ItemConfig | undefined;

  constructor(private router: Router) {}

  onDetailsClick(route: string | undefined) {
    if (route) {
      this.router.navigateByUrl(route);
    }
  }
}
