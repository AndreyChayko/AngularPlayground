import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-injection-token-ex',
  templateUrl: './injection-token-ex.component.html',
  styleUrls: ['./injection-token-ex.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InjectionTokenExComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
