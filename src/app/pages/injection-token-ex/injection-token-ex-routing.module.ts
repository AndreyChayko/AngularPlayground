import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InjectionTokenExComponent } from './injection-token-ex.component';

const routes: Routes = [{ path: '', component: InjectionTokenExComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InjectionTokenExRoutingModule {}
