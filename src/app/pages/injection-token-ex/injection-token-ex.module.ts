import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InjectionTokenExRoutingModule } from './injection-token-ex-routing.module';
import { InjectionTokenExComponent } from './injection-token-ex.component';

@NgModule({
  declarations: [InjectionTokenExComponent],
  imports: [CommonModule, InjectionTokenExRoutingModule],
  exports: [InjectionTokenExComponent],
})
export class InjectionTokenExModule {}
