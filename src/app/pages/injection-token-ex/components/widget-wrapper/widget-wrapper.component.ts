import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { WIDGET } from '../widgets/widget.token';
import { Widget } from '../widgets/widget.interface';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetWrapperComponent implements OnInit {
  @ContentChild(WIDGET, { static: true })
  widget!: Widget;

  ngOnInit(): void {
    this.widget.load();
  }

  onRefreshClick() {
    this.widget.refresh();
  }
}
