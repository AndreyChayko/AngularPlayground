import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InjectionTokenExRoutingModule } from './injection-token-ex-routing.module';
import { InjectionTokenExComponent } from './injection-token-ex.component';
import { WidgetWrapperComponent } from './components/widget-wrapper/widget-wrapper.component';
import { TemperatureWidgetComponent } from './components/widgets/temperature-widget/temperature-widget.component';
import { VelocityWidgetComponent } from './components/widgets/velocity-widget/velocity-widget.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    InjectionTokenExComponent,
    WidgetWrapperComponent,
    TemperatureWidgetComponent,
    VelocityWidgetComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    InjectionTokenExRoutingModule,
  ],
  exports: [InjectionTokenExComponent],
})
export class InjectionTokenExModule {}
