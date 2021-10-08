import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  CONFIGS,
  ItemConfigKey,
} from '../../shared/navigation-item/models/item-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  injectionTokenConfig = CONFIGS.find(
    (item) => item.key === ItemConfigKey.INJECTION_TOKEN
  );

  constructor() {}

  ngOnInit(): void {}
}
