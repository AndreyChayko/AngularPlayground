import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-control-value-accessor-ex',
  templateUrl: './control-value-accessor-ex.component.html',
  styleUrls: ['./control-value-accessor-ex.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlValueAccessorExComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
