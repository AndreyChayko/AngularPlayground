import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlValueAccessorExComponent } from './control-value-accessor-ex.component';

const routes: Routes = [
  {
    path: '',
    component: ControlValueAccessorExComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlValueAccessorExRoutingModule {}
