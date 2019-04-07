import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'intro',
  pathMatch: 'full'
}, {
  path: 'intro',
  component: IntroComponent
}, {
  path: 'observables',
  component: ObservableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
