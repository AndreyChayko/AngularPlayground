import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlValueAccessorExRoutingModule } from './control-value-accessor-ex-routing.module';
import { ControlValueAccessorExComponent } from './control-value-accessor-ex.component';

@NgModule({
  declarations: [ControlValueAccessorExComponent],
  imports: [CommonModule, ControlValueAccessorExRoutingModule],
  exports: [ControlValueAccessorExComponent],
})
export class ControlValueAccessorExModule {}
