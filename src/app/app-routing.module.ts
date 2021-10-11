import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'injection-token',
    loadChildren: () =>
      import('./pages/injection-token-ex/injection-token-ex.module').then(
        (m) => m.InjectionTokenExModule
      ),
  },
  {
    path: 'value-accessor',
    loadChildren: () =>
      import(
        './pages/control-value-accessor-ex/control-value-accessor-ex.module'
      ).then((m) => m.ControlValueAccessorExModule),
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
