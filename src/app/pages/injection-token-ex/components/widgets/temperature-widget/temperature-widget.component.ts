import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-temperature-widget',
  templateUrl: './temperature-widget.component.html',
  styleUrls: ['./temperature-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: WIDGET,
      useExisting: TemperatureWidgetComponent,
    },
  ],
})
export class TemperatureWidgetComponent implements Widget {
  private loading$$ = new BehaviorSubject<boolean>(false);

  isLoading$ = this.loading$$
    .asObservable()
    .pipe(shareReplay({ refCount: true, bufferSize: 1 }));

  load() {
    console.log('Getting data from weather server...');
  }

  refresh() {
    this.loading$$.next(true);
    setTimeout(() => {
      console.log('Data is loaded successfully!!!');
      this.loading$$.next(false);
    }, 3000);
  }
}
