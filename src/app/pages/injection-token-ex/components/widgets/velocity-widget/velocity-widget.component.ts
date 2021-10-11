import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: WIDGET,
      useExisting: VelocityWidgetComponent,
    },
  ],
})
export class VelocityWidgetComponent implements Widget {
  private refresh$$ = new BehaviorSubject<boolean>(false);

  isRefreshing$ = this.refresh$$
    .asObservable()
    .pipe(shareReplay({ refCount: true, bufferSize: 1 }));

  load() {
    console.log('Load data from JIRA...');
  }

  refresh() {
    this.refresh$$.next(true);
    setTimeout(() => {
      console.log('JIRA has returned data successfully!!!');
      this.refresh$$.next(false);
    }, 5000);
  }
}
